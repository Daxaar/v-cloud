<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field prepend-icon="person" v-model="username" name="username" label="username" type="text"></v-text-field>
                    <v-text-field prepend-icon="lock" v-model="password" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @keyup.enter="login()" @click="login()">Login</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login(){
            console.log("login");
            if(this.username == "darren" && this.password == "password"){
                this.$store.commit('CREATE_USER',{fullName: "Darren Lewis", isAdmin: true});
                console.log(this.$router);
                this.$router.push(this.$route.query.nextUrl || '/');
            } else {
                this.$store.state.failedLoginAttempts++;
            }
        }
    }
}
</script>
