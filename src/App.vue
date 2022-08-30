<template>
    <div class="app">
        <MyButton @click="fetchUser"></MyButton>
    </div>
</template>

<script>
import MyButton from "./components/UI/MyButton.vue";
export default {
    components: { MyButton },
    data() {
        return {
            posts: [
                {id, title, body}
            ]
        }
    },
    methods: {
        async fetchUser() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response);
                this.posts = response.data;
            } catch(e) {
                alert('error')
            }
        }
    },
    /*mounted() {
        this.fetchUser();
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