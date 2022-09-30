<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: white;
    color: #2889D6;
    border: 2px solid #2889D6;
}
.btn:hover {
    background: #2889D6;
    color: white;
}
</style>