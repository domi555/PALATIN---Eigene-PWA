<template>
  <div class="ma-3">
    <v-text-field
      filled
      color="orange lighten-1"
      label="Name..."
      v-model="name"
      @change="patchNote"
      :disabled="offline"
    ></v-text-field>

    <v-card v-for="field of fields" :key="field.id" class="mb-3 elevation-4">
      <div class="pa-3">
        <v-text-field
          filled
          color="orange lighten-1"
          label="Heading..."
          v-model="field.name"
          @input="patchField(fields.find((el) => el.id == field.id))"
          :disabled="offline"
        ></v-text-field>

        <v-textarea
          filled
          color="orange lighten-1"
          label="Write..."
          v-model="field.content"
          @input="patchField(field)"
          :disabled="offline"
        ></v-textarea>

        <img v-if="field.attachment" :src="field.attachment" class="mb-3" />

        <v-btn
          small
          :to="`/pen/${field.id}`"
          class="me-2 orange lighten-1 white--text"
          :disabled="offline"
          >Pen input</v-btn
        >
        <v-btn
          v-if="!field.attachment"
          small
          :to="`/camera/${field.id}`"
          class="me-2 orange lighten-1 white--text"
          :disabled="offline"
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
    offline: { type: Boolean },
    id: {
      type: String,
    },
  },
  watch: {
    id() {
      if (this.id == 'new') {
        this.fields = [];
        this.getFields();
      } else this.getFields();
    },
  },

  async created() {
    await this.getFields();
  },
  methods: {
    async getFields() {
      if (this.id == 'new') {
        try {
          const { data } = await axios({
            url: `${this.serverAddress}/notes`,
            method: 'POST',
            data: {
              name: this.name,
            },
          });

          this.$router.push(`/edit/${data.id}`);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const { data } = await axios({
            url: `${this.serverAddress}/fields/${this.id}`,
            method: 'GET',
          });

          this.fields = data;
        } catch (error) {
          console.log(error);
        }
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

    async patchNote() {
      try {
        await axios({
          url: `${this.serverAddress}/notes/${this.id}`,
          method: 'PATCH',
          data: {
            name: this.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async patchField(field) {
      try {
        await axios({
          url: `${this.serverAddress}/fields/${field.id}`,
          method: 'PATCH',
          data: {
            name: field.name,
            content: field.content,
            attachment: field.attachment,
          },
        });

        this.fields.find((el) => el.id == field.id).content = field.content;
        this.fields.find((el) => el.id == field.id).attachment =
          field.attachment;
      } catch (error) {
        console.log(error);
      }
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

<style scoped>
img {
  display: block;
  height: 200px;
}
</style>
