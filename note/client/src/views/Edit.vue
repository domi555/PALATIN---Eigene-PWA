<template>
  <div class="ma-3">
    <v-text-field
      filled
      color="orange lighten-1"
      label="Name..."
      v-model="name"
    ></v-text-field>

    <v-card v-for="field of fields" :key="field.id" class="mb-3 elevation-4">
      <div class="pa-3">
        <v-text-field
          filled
          color="orange lighten-1"
          label="Heading..."
          v-model="field.name"
          @input="patchField(fields.find((el) => el.id == field.id))"
        ></v-text-field>

        <v-textarea
          filled
          color="orange lighten-1"
          label="Write..."
          v-model="field.content"
          @input="patchField(field)"
        ></v-textarea>

        <v-btn small to="/pen/new" class="me-2 orange lighten-1 white--text"
          >Pen input</v-btn
        >
        <v-btn small to="/camera/new" class="me-2 orange lighten-1 white--text"
          >Take image</v-btn
        >
        <v-btn
          small
          @click="deleteField(field.id)"
          class="orange lighten-1 white--text"
          >Delete</v-btn
        >
      </div>
    </v-card>
    <v-btn small @click="postField" class="orange lighten-1 white--text"
      >Add</v-btn
    >
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Note',

  data() {
    return {
      name: 'New note',
      fields: [],
    };
  },
  props: {
    serverAddress: { type: String },
    id: {
      type: String,
    },
  },

  async created() {
    if (this.id != 'new') {
      await this.getFields();
    } else {
      try {
        const { data } = await axios({
          url: `${this.serverAddress}/notes`,
          method: 'POST',
          data: {
            name: this.name,
          },
        });

        this.id = data.id;
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    async getFields() {
      try {
        const { data } = await axios({
          url: `${this.serverAddress}/fields/${this.id}`,
          method: 'GET',
        });

        this.fields = data;
      } catch (error) {
        console.log(error);
      }
    },

    async postField() {
      try {
        await axios({
          url: `${this.serverAddress}/fields`,
          method: 'POST',
          data: {
            name: '...',
            content: '...',
            attachment: null,
            note_id: this.id,
          },
        });

        await this.getFields();
      } catch (error) {
        console.log(error);
      }
    },

    async patchField(field) {
      // try {
      //   await axios({
      //     url: `${this.serverAddress}/fields/${field.id}`,
      //     method: 'PATCH',
      //     data: {
      //       name: field.name,
      //       content: field.content,
      //       attachment: field.attachment,
      //     },
      //   });

      //   await this.getFields();
      // } catch (error) {
      //   console.log(error);
      // }
    },

    async deleteField(id) {
      try {
        await axios({
          url: `${this.serverAddress}/fields/${id}`,
          method: 'DELETE',
        });

        await this.getFields();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
