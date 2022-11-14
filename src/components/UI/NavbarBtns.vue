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
    width: 100%;
    padding: 10px 15px;
    background: crimson;
    color: white;
    border: 2px solid crimson;
    border-radius: 50px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
}
.btn:hover {
    background: white;
    color: crimson;
    border: 2px solid crimson;
    border-radius: 50px;
}
</style>