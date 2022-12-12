<template>
    <Navbar></Navbar>
    <div class="app">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";
import Footer from "@/components/UI/Footer.vue";
import store from "./store";
export default {
    components: {
        Navbar, Footer
    },
    created: () => {
        store.dispatch("logout")
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 20px;
}
.app {
    padding: 20px;
    background-color: #fff;
}
</style>