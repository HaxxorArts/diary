<template>
    <div class="navbar">
        <div>Diary</div>
        <div class="navbar__btns">
            <MyButton v-if="!isLoggedIn" @click="showDialog">Sign in</MyButton>
            <MyButton v-if="isLoggedIn" @click="logout">Logout</MyButton>
        </div>
        <MyDialog v-if="!isLoggedIn" v-model:show="visiableDialog">
            <SignInForm></SignInForm>
        </MyDialog>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyDialog from "./MyDialog.vue";
import SignInForm from "../SignInForm.vue";
export default {
    components: {
    MyButton,
    MyDialog,
    SignInForm
},
data() {
    return {
        visiableDialog: false
    }
},
methods: {
    showDialog() {
        this.visiableDialog = true;
    },
    logout() {
        this.$store.dispatch('logout')
        .then(() => {
            this.$router.push('/')
        })
    }
},
computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    }
}
</script>

<style>
.navbar {
    background-color: black;
    color: white;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 10px 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>