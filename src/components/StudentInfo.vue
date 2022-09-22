<template>
    <div class="info">
        <table>
            <tr>
                <th>Модуль</th>
                <th>Факторы</th>
                <th>Обьем занятий(недель)</th>
                <th>Контрольн. дата</th>
                <th>Мин. балл</th>
                <th>Макс. балл</th>
                <th>Фактич. балл</th>
                <th>Рейтинг</th>
                <th>Примечание</th>
            </tr>
            <tr v-for="info in information">
                <td>{{info.module}}</td>
                <td>{{info.factor}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            information: [
                {
                    module: 'module',
                    factor: 'factor',

                },
                {
                    module: 'module',
                    factor: 'factor',
                }
            ]
        }
    }
}
</script>
<style scoped>
    .info {
        margin-top: 20px;
        padding: 10px;
    }
    .info table {
        border-collapse: collapse;
        width: 100%;
    }
    .info th, td {
        border: 1px solid black;
        text-align: left;
        padding: 15px 10px;
    }
</style>