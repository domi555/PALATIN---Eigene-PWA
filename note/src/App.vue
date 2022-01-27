<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <img src="./assets/logo.png" style="width: 30px" />
      <v-toolbar-title class="ms-2 font-weight-bold">NOTE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" class="me-2" active-class="red darken-3">Home</v-btn>
      <v-btn to="/notes" active-class="red darken-3">Notes</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
  }),
};
</script>
