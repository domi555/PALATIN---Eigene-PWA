<template>
  <v-app>
    <v-app-bar app dark>
      <img src="./assets/logo.png" style="width: 30px" />
      <v-toolbar-title class="ms-2 text-body-1 font-weight-medium"
        >Note</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn small to="/" class="me-2 orange lighten-1">Note</v-btn>
      <v-btn small to="/edit/new" class="amber orange lighten-1">New</v-btn>
    </v-app-bar>

    <v-main>
      <router-view :serverAddress="serverAddress" :offline="offline" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
    offline: false,
  }),

  created() {
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
  },
};
</script>
