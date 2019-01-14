<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">v-Cloud</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/login">
        <span class="mr-2">{{LoginText}} ({{failCount}})</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  name: "App",
  components: {},
  data() {
    return {
      LoginButtonText: this.$store.state.user == null ? "Login" : "Logout"
    };
  },
  created() {
      // Load data from API as required
      // Load authenticated user from localStorage into state
      this.$store.commit("CREATE_USER", {
          fullName: "Darren Lewis",
          isAdmin: true
        });
  },
  computed: {
    failCount() {
      return this.$store.state.failedLoginAttempts;
    },
    LoginText() {
      return this.$store.state.user == null ? "Login" : "Logout";
    }
  }
};
</script>