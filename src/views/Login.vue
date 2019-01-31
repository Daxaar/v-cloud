<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom></v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login()">
              <v-text-field
                prepend-icon="person"
                v-model="username"
                name="username"
                label="username"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="password"
                name="password"
                label="Password"
                id="password"
                type="password"
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="loginFailed" :bottom="true" :multi-line="false" :timeout="3000">
      {{ loginFailedText }}
      <v-btn color="pink" flat @click="loginFailed = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "darren",
      password: "password",
      loginFailedText: "Login Failed",
      loginFailed: false
    };
  },
  methods: {
    login() {
      if (this.username == "darren" && this.password == "password") {
        this.$store.commit("login", {
          fullName: "Darren Lewis",
          isAdmin: true
        });
        // User has successfully logged in so redirect them to where they were originally trying to get to
        this.$router.push(this.$route.query.nextUrl || "/");
      } else {
        this.loginFailed = true;
      }
    }
  }
};
</script>
