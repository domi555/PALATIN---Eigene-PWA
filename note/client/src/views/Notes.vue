<template>
  <div>
    <v-row class="ma-2">
      <v-col v-for="note of notes" :key="note.id" cols="12" md="6" lg="4">
        <v-card class="mx-2 mt-3 elevation-4">
          <v-card-actions>
            <p class="ms-2 mb-0 text-subtitle-2">{{ note.name }}</p>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="290" :retain-focus="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  plain
                  class="gray--text lighten-2"
                  v-bind="attrs"
                  v-on="on"
                  >Drop</v-btn
                >
              </template>
              <v-card>
                <v-card-title class="text-h6"> Drop note </v-card-title>
                <v-card-text>Notes can not be recovered.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    small
                    class="mb-2 orange lighten-1 white--text"
                    @click="deleteNote(note.id)"
                  >
                    Drop
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn
              small
              class="orange lighten-1 white--text"
              :to="`/edit/${note.id}`"
              >Open</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      notes: [],
      dialog: false,
    };
  },
  props: {
    serverAddress: { type: String },
    id: {
      type: Number,
    },
  },

  async created() {
    await this.getNotes();
  },
  methods: {
    async getNotes() {
      try {
        const { data } = await axios({
          url: `${this.serverAddress}/notes`,
          method: 'GET',
        });

        this.notes = data.sort((objA, objB) => {
          let a = objA.name.toLowerCase();
          let b = objB.name.toLowerCase();

          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteNote(id) {
      try {
        await axios({
          url: `${this.serverAddress}/notes/${id}`,
          method: 'DELETE',
        });

        await this.getNotes();
        this.dialog = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
