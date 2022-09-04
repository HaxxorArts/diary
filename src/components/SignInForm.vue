<template>
    <form @submit.prevent class="form">
        <h4>Autorisation</h4>
        <MyInput v-model="user.email" type="text" placeholder="Login" />
        <MyInput v-model="user.password" type="text" placeholder="Password" />
        <MyButton style="align-self: flex-end" @click="autorisation">Sign in</MyButton>
     </form>
</template>

<script>
import axios from "axios";
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
import store from "@/store"
export default {
    components: {
        MyButton, MyInput
    },
    data() {
        return {
            user: {

            }
        }
    },
    methods: {
        autorisation() {
            axios.post('http://192.168.1.3:8000/auth/login', this.user, 
            {
                headers: {

                }
            })
            .then(response => {
                console.log(response.data);
                store.commit('addToken', response.data)
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