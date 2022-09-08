<template>
    <form @submit.prevent class="login">
        <h4>Autorisation</h4>
        <MyInput v-model="email" type="text" placeholder="Login" />
        <MyInput v-model="password" type="text" placeholder="Password" />
        <MyButton type="submit">Sign in</MyButton>
     </form>
</template>

<script>
import axios from "axios";
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
import router from "@/router/router";
import store from "@/store";
export default {
    components: {
        MyButton, MyInput
    },
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login:() => {
            const email = this.email
            const password = this.password
            this.$store.dispatch('login', {email, password})
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        },
        autorisation() {
            axios.post('http://localhost:8000/auth/login', this.user, 
            {
                headers: {

                }
            })
            .then(response => {
                console.log(response.data.access_token);
                localStorage.setItem("token", response.data.access_token)
                console.log(localStorage.state.tok)
                router.push('/auth')
            })
            .catch(function (error) {
                console.log(error);
            })
        },
    },
}
</script>

<style>
.login {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    border: 2px solid teal;
    border-radius: 15px;
}
</style>