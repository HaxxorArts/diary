<template>
    <div class="app">
        <MyButton @click="showDialog">Sign in</MyButton>
        <MyDialog v-model:show="visiableDialog">
            <SignInForm></SignInForm>
        </MyDialog>
    </div>
</template>

<script>
import MyButton from "./components/UI/MyButton.vue";
import PostList from "./components/PostList.vue";
import axios from 'axios';
import MyDialog from "./components/UI/MyDialog.vue";
import SignInForm from "./components/SignInForm.vue";
export default {
    components: { MyButton, PostList, MyDialog, SignInForm },
    data() {
        return {
            posts: [
                {id: 1, title: '', body: ''}
            ],
            visiableDialog: false,
        }
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response);
                this.posts = response.data;
            } catch(e) {
                alert('error')
            }
        },
        showDialog() {
            this.visiableDialog = true;
        }
    },
    /*mounted() {
        this.fetchPost();
    }*/
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