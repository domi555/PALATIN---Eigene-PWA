<template>
  <div>
    <v-row class="ma-2">
      <v-col
        v-for="note of notes.filter((el) => !el.isDeleted)"
        :key="note.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="mx-2 mt-3 elevation-4">
          <v-card-actions>
            <p class="ms-2 mb-0 text-subtitle-2">
              {{ note.isUpdated != '' ? note.name : note.isUpdated }}
            </p>

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

            <v-dialog v-model="update" max-width="290" :retain-focus="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  plain
                  class="gray--text lighten-2"
                  v-bind="attrs"
                  v-on="on"
                  >Rename</v-btn
                >
              </template>
              <v-card>
                <v-text-field
                  filled
                  color="orange lighten-1"
                  label="New name..."
                  v-model="updateName"
                  class="mx-3 pt-3"
                ></v-text-field>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    small
                    class="mb-2 orange lighten-1 white--text"
                    @click="updateNote(note.id)"
                  >
                    Rename
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
import { openDB } from 'idb';

export default {
  name: 'Home',

  data() {
    return {
      db: null,

      notes: [],
      dialog: false,

      update: false,
      updateName: '',
    };
  },
  props: {
    serverAddress: { type: String },
    offline: { type: Boolean },
    id: {
      type: Number,
    },
  },
  watch: {
    offline(off) {
      if (!off) {
        const deleted = this.notes.filter((el) => el.isDeleted);
        deleted.forEach((el) => {
          this.deleteOnlineNote(el.id);
        });

        const updated = this.notes.filter((el) => el.isUpdated != '');
        updated.forEach((el) => {
          this.updateOnlineNote(el.id);
        });
      }
    },
  },

  async created() {
    await this.openDB();

    await this.getNotes();
  },
  methods: {
    async openDB() {
      this.db = await openDB('notes', 1, {
        upgrade(db) {
          db.createObjectStore('notes', { keyPath: 'id' });
        },
      });
    },

    async getNotes() {
      if (this.offline) await this.getStoredNotes();
      else await this.getOnlineNotes();
    },
    async getOnlineNotes() {
      try {
        const { data } = await axios({
          url: `${this.serverAddress}/notes`,
          method: 'GET',
        });

        this.notes = data
          .sort((objA, objB) => {
            let a = objA.name.toLowerCase();
            let b = objB.name.toLowerCase();

            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          })
          .map((el) => ({ ...el, isDeleted: false, isUpdated: null }));

        this.db.clear('notes');
        for (let e of this.notes) {
          await this.db.put('notes', e);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getStoredNotes() {
      const temp = await this.db.getAll('notes');
      this.notes = temp.sort((objA, objB) => {
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
    },

    async deleteNote(id) {
      if (this.offline) await this.deleteStoredNote(id);
      else await this.deleteOnlineNote(id);

      this.dialog = false;

      await this.getNotes();
    },
    async deleteOnlineNote(id) {
      try {
        await axios({
          url: `${this.serverAddress}/notes/${id}`,
          method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteStoredNote(id) {
      let note = await this.db.get('notes', Number(id));
      note.isDeleted = true;

      this.db.put('notes', note);
    },

    async updateNote(id) {
      console.log(this.offline);
      if (this.offline) await this.updateStoredNote(id);
      else await this.updateOnlineNote(id);

      this.update = false;
      this.updateName = '';

      await this.getNotes();
    },
    async updateOnlineNote(id) {
      try {
        await axios({
          url: `${this.serverAddress}/notes/${id}`,
          method: 'PATCH',
          data: {
            name: this.updateName,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updateStoredNote(id) {
      let note = await this.db.get('notes', Number(id));
      note.isUpdated = this.updateName;

      this.db.put('notes', note);
    },
  },
};
</script>
