<template>
  <v-btn flat @click="login()">
    <span class="mr-2">{{LoginText}}</span>
  </v-btn>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "UserLogin",
  computed: {
      ...mapGetters(['userIsLoggedIn']),
      LoginText() {
          return this.userIsLoggedIn ? "Logout" : "Login";
      }
  },
  methods: {
    ...mapMutations(["logout"]),
    login() {
      if (localStorage.getItem("token")) {
        this.logout();
        this.$router.push('/home');
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>
