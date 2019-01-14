<template>
  <v-btn flat to="/login">
    <span class="mr-2">{{LoginText}} ({{failedLoginAttempts}})</span>
  </v-btn>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserLogin",
  created() {
    // Load data from API as required
    // Load authenticated user from localStorage into state
    this.$store.commit("CREATE_USER", {
      fullName: "Darren Lewis",
      isAdmin: true
    });
  },
  computed: {
    ...mapState(["failedLoginAttempts", "user"]),
    LoginText() {
      return this.user == null ? "Login" : "Logout";
    }
  }
};
</script>
