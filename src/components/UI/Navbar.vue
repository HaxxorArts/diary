<template>
    <div class="container">
        <div class="row">
            <div class="my__navbar">
                <div class="col-1 my__navbar_logo"><img src="@/static/logo.png"/></div>
                <div class="col-3 my__navbar__logotext">
                    <p>Электронный дневник</p>
                    <p>Online ПензГТУ</p>
                </div>
                <div class="col-4 my__navbar__text">
                    <p>Сотрудничество вуза с партерами - </p>
                    <p>родителями обучающихся</p>
                </div>
                <div class="col-2 my__navbar__text d-inline-flex align-items-center">
                    <img class="my__navbar__phoneimg" src="@/static/phone.png" />
                    <div>
                        <p>+7 (927) 392-52-88</p>
                        <p>пн-пт с 9:00 до 16:00</p>
                    </div>
                </div>
                <div class="col-2">
                    <NavbarBtns v-if="!isLoggedIn" @click="showDialog">Войти в систему</NavbarBtns>
                    <NavbarBtns v-if="isLoggedIn" @click="logout">Logout</NavbarBtns>
                </div>
                <MyDialog v-if="!isLoggedIn" v-model:show="visiableDialog">
                    <SignInForm></SignInForm>
                </MyDialog>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import SignInForm from "@/components/SignInForm.vue";
import NavbarBtns from "./NavbarBtns.vue";
export default {
    components: {
        MyButton,
        MyDialog,
        SignInForm,
        NavbarBtns
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
    },
}
</script>

<style scoped>
.my__navbar {
    background-color: white;
    color: white;
    /*box-shadow: 1px 1px 1px lightgray;*/
    display: flex;
    align-items: center;
    padding: 25px 0;
    font-family: Montserrat, sans-serif;
}
.my__navbar__logotext p{
    margin-left: 20px;
    text-align: left;
    color:black;
    margin-bottom: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
}
.my__navbar__text p{
    margin-left: 20px;
    text-align: left;
    color:black;
    margin-bottom: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.my__navbar__btns {
    margin-left: auto;
}
.my__navbar_logo img{
    height: 90px;
    width: 96px;
    align-items: center;
}
.my__navbar__phoneimg {
    width: 18px;
    height: 18px;
}
</style>