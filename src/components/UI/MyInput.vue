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
    background: white;
    color: black;
    border: 2px solid black;
    padding: 10px 15px;
}
.input:hover {
    background: black;
    color: white;
}
.input:focus {
    background: black;
    color: white;
}
</style>