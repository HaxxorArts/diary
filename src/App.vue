<template>
    <div class="app">
        <div class="nav">
            <router-link to="/">Home</router-link>
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn : () => {
            return this.$store.getters.isLoggedIn
        },
    },
    methods: {
        logout: () => {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/')
            }) 
        }
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
</style>