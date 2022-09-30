<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'NavbarBtns'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: #2889D6;
    color: white;
    border: 2px solid white;
}
.btn:hover {
    background: white;
    color: #2889D6;
}
</style>