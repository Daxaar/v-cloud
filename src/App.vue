<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">v-Cloud</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <UserLogin/>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import UserLogin from './components/UserLogin'

export default {
  name: "App",
  components: {
      UserLogin
  },
};
</script>