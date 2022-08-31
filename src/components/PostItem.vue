<template>
    <div class="post">
        <div>
            <div><strong>Title:</strong>{{ post.title }}</div>
            <div><strong>Discription:</strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <MyButton @click="$emit('remove', post)">Delete</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
    components: { MyButton },
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>