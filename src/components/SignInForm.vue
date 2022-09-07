<template>
    <form @submit.prevent class="form">
        <h4>Autorisation</h4>
        <MyInput v-model="user.email" type="text" placeholder="Login" />
        <MyInput v-model="user.password" type="text" placeholder="Password" />
        <MyButton style="align-self: flex-end" @click="autorisation">Sign in</MyButton>
        <MyButton @click="$router.push('/auth')">Push</MyButton>
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
            user: {
                email: 'nilson@email.com',
                password: 'nilson'
            }
        }
    },
    methods: {
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
.form {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    border: 2px solid teal;
    border-radius: 15px;
}
</style>