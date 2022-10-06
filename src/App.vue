<template>
    <Navbar></Navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";
import store from "./store";
export default {
    components: {
        Navbar
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
}
</style>