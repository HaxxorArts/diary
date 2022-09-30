<template>
    <button class="accordion"></button>
    <div class="panel">
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .accordion {
        background-color: #eee;
        color: black;
        cursor: pointer;
        padding: 20px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
    }
    .accordion:active, .accordion:hover {
        background-color: #2889D6;
    }
    .panel {
        padding: 20px;
        background-color: white;
        display: none;
    }
</style>