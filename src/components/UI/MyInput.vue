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
    color: #2889D6;
    border: 2px solid #2889D6;
    padding: 10px 15px;
}
.input:hover {
    background: #2889D6;
    color: white;
}
.input:focus {
    background: #2889D6;
    color: white;
}
</style>