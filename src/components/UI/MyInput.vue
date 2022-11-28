<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    background: #eee;
    color: black;
    padding: 12px 25px;
    border-radius: 50px;
    border: none;
}
.input:hover {
    background: #ddd;
    color: black;
}
.input:focus {
    background: #ddd;
    color: black;
}
</style>