<template>
    <form @submit.prevent class="form">
        <h4>Autorisatiom</h4>
        <MyInput v-model="post.title" type="text" placeholder="Login" />
        <MyInput v-model="post.body" type="text" placeholder="Password" />
        <MyButton style="align-self: flex-end" @click="createPost">Add</MyButton>
     </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue"
export default {
    components: {
        MyButton, MyInput
    },
    data() {
        return {
            post: {
                
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.title = "";
            this.body = "";
        },
    },
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    border: 2px solid teal;
    border-radius: 15px;
}
</style>