<template>
    <div>
        <MyLabel>You've been done authorization successfully</MyLabel>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyLabel from '@/components/UI/MyLabel.vue';
export default {
    components: { MyButton, MyLabel },
    methods: {
        
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
    }
}
</script>

<style scoped>

</style>