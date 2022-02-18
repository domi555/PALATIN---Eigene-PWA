<template>
  <div class="ma-3">
    <v-text-field
      filled
      color="orange lighten-1"
      label="Name..."
      v-model="document.name"
    ></v-text-field>

    <v-card v-for="field of document.field" :key="field.id" class="elevation-4">
      <div class="pa-3">
        <v-text-field
          filled
          color="orange lighten-1"
          label="Heading..."
          v-model="field.name"
        ></v-text-field>

        <v-textarea
          filled
          color="orange lighten-1"
          label="Write..."
          v-model="field.area"
        ></v-textarea>

        <v-btn small to="/pen/new" class="me-2 orange lighten-1 white--text"
          >Pen input</v-btn
        >
        <v-btn small to="/camera/new" class="orange lighten-1 white--text"
          >Take image</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Note',

  data() {
    return {
      document: {
        name: 'New note',
        field: [{ name: 'New field', area: 'Written text', attachment: [] }],
      },
    };
  },
  props: {
    id: {
      type: String,
    },
  },
};
</script>
