<template>
    <div>
        <MyLabel>Sign in to get access to diary</MyLabel>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';
import MyDialog from "@/components/UI/MyDialog.vue";
import SignInForm from "@/components/SignInForm.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
export default {
    components: { MyButton, PostList, MyDialog, SignInForm, MyLabel },
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
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    }
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