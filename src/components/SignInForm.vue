<template>
    <form @submit.prevent class="form">
        <MyLabel>Authorization</MyLabel>
        <MyInput style="margin-top: 10px;" v-model="user.email" type="text" placeholder="Login" />
        <MyInput style="margin-top: 10px;" v-model="user.password" type="text" placeholder="Password" />
        <MyButton style="align-self: flex-end; margin-top: 10px;" @click="login">Sign in</MyButton>
     </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
import router from "@/router/router";
import MyLabel from "./UI/MyLabel.vue";
import MyDialogVue from "./UI/MyDialog.vue";
export default {
    components: {
    MyButton,
    MyInput,
    MyLabel
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
        login() {
            this.$store.dispatch('login', this.user)
            .then(() => {
                router.push('/auth')
            })
            .catch(err => console.log(err))
        }
        /*autorisation() {
            axios.post('http://localhost:8000/auth/login', this.user, 
            {
                headers: {

                }
            })
            .then(response => {
                console.log(response.data.access_token);
                localStorage.setItem("token", response.data.access_token)
                router.push('/auth')
            })
            .catch(function (error) {
                console.log(error);
            })
        },*/
    },
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    border-radius: 15px;
    align-items: center;
}
</style>