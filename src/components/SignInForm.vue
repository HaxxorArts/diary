<template>
    <div class="form__hat">
        <label>Вход в электронный дневник</label>
    </div>
    <form @submit.prevent class="form">
        <MyInput style="margin-top: 20px;" v-model="user.email" type="text" placeholder="Login" />
        <MyInput style="margin-top: 20px;" v-model="user.password" type="text" placeholder="Password" />
        <button class="MyFormbtn" @click="login">Войти в систему</button>
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
    padding: 30px 100px 50px 100px;
    border-radius:0 0 15px 15px;
    align-items: center;
}
.MyFormbtn {
    margin-top: 50px;
    align-self: center;
    padding: 12px 25px;
    border-radius: 50px;
    border: 2px solid crimson;
    color: white;
    background-color: crimson;
}
.MyFormbtn:hover {
    border: 2px solid crimson;
    color: crimson;
    background-color: white;
}
.form__hat {
    background-color: teal;
    padding: 30px 100px;
    border-radius: 15px 15px 0 0;
}
</style>