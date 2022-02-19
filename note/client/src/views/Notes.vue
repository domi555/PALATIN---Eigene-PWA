<template>
  <div>
    <v-row class="ma-2">
      <v-col v-for="note of notes" :key="note.id" cols="12" md="6" lg="4">
        <v-card class="ma-2 elevation-4">
          <v-card-actions>
            <p class="ms-2 mb-0 text-subtitle-2">Name</p>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="290">
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
                    @click="drop(note.id)"
                  >
                    Drop
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn small class="orange lighten-1 white--text" to="/edit/new"
              >Open</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      notes: [
        { id: '1', name: 'Name' },
        { id: '2', name: 'Name' },
        { id: '3', name: 'Name' },
      ],

      dialog: false,
    };
  },
  props: {
    id: {
      type: Number,
    },
  },

  methods: {
    drop(id) {
      console.log(id);
      this.dialog = false;
    },
  },
};
</script>
