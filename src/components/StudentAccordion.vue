<template>
    <button class="accordion" @click="ShowContent">Section 1</button>
    <div class="panel" v-if="show">
        <StudentInfo></StudentInfo>
    </div>
</template>
<script>
import StudentInfo from './StudentInfo.vue';
export default {
    components: {
        StudentInfo
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        ShowContent() {
            if (this.show == false) {
                this.show = true;
            }
            else {
                this.show = false;
            }
        }
    },
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
    }
</style>