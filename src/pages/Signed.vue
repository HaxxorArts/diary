<template>
    <div>
        <h1>You've been auth</h1>
        <h3>{{ email }}</h3>
        <MyButton v-if="isLoggedIn" @click="logout">Logout</MyButton>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
export default {
    components: { MyButton },
    methods: {
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
        },
        email() {
            return this.$store.state.user
        }
    }
}
</script>

<style scoped>

</style>