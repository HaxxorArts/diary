<template>
    <div>
        <MyLabel>You've been done authorization successfully</MyLabel>
        <StudentInfo></StudentInfo>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyLabel from '@/components/UI/MyLabel.vue';
import StudentInfo from '@/components/StudentInfo.vue';
export default {
    components: { MyButton, MyLabel, StudentInfo },
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