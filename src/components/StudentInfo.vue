<template>
    <div class="info">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Модуль</th>
                    <th scope="col">Факторы</th>
                    <th scope="col">Обьем занятий(недель)</th>
                    <th scope="col">Контрольн. дата</th>
                    <th scope="col">Мин. балл</th>
                    <th scope="col">Макс. балл</th>
                    <th scope="col">Фактич. балл</th>
                    <th scope="col">Рейтинг</th>
                    <th scope="col">Примечание</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="info in information">
                    <th scope="row">{{info.module}}</th>
                    <td>{{info.factor}}</td>
                </tr>
            </tbody>
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
        /*border-collapse: collapse;
        width: 100%;*/
    }
    .info th, td {
        /*border: 1px solid black;
        text-align: left;
        padding: 15px 10px;*/
    }
    .info thead {
        border-color: unset;
    }
</style>