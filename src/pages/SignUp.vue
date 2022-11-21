<template>
    <div class="row">
        
        <div class="col-12 col-lg-6 col-xl-6 body__text">
            <h3>Узнайте об индивидуальных достижениях ваших детей!</h3>
            <p>"Электронный дневник онлайн" - это онлайн ресурс ПензГТУ, созданый для индивидуального  споровождениея студентов.
                Наиболее полная и конфидециальная информация об учебных и внеучебных резульататх деятельности студентов</p>
            <p>Мы выражаем искреннюю благодарность родителям обучающихся за участие в даннмо проекте и приглашаем к дальнейшему сотрудничеству</p>
        </div>
        <div class="col-12 col-lg-6 col-xl-6 body__img">
            <img src="@/static/picture.png" />
        </div>
        <div class="col-12 col-lg-6 offsite__btn">
            <button>Официальный сайт вуза<img src="@/static/ofsite.png" /></button>
        </div>
        <div class="col-12 col-lg-6 fakul__btn">
            <button>Факультеты и институты<img src="@/static/fakul.png" /></button>
        </div>
        <div class="col-12 col-lg-6 podraz__btn">
            <button>Структурное подразделение<img src="@/static/podradzdel.png" /></button>
        </div>
        <div class="col-12 col-lg-6 raspis__btn">
            <button>Расписание занятий<img src="@/static/raspisanie.png" /></button>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';
import MyDialog from "@/components/UI/MyDialog.vue";
import SignInForm from "@/components/SignInForm.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
export default {
    components: { MyButton, PostList, MyDialog, SignInForm, MyLabel },
    data() {
        return {
            posts: [
                {id: 1, title: '', body: ''}
            ],
            visiableDialog: false,
        }
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response);
                this.posts = response.data;
            } catch(e) {
                alert('error')
            }
        },
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
}
.body__text h3 {
    margin-top: 20px;
    text-align: left;
    color: #003060;
    margin-bottom: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    font-size: 32px;
}
.body__text p {
    margin-top: 20px;
    text-align: left;
    color:black;
    margin-bottom: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 18px;
}
.body__img img {
    width: 100%;
}

.offsite__btn button {
    margin-top: 40px;
    width: 100%;
    padding: 30px 35px;
    border-radius: 5px;
    color: white;
    background-color:#1E90FF;
    border-color: #1E90FF;
    border-style: none;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-align: left;
}
.offsite__btn img {
    width: 32px;
    height: 32px;
    float: right;
}

.fakul__btn button {
    margin-top: 40px;
    width: 100%;
    padding: 30px 35px;
    border-radius: 5px;
    color: white;
    background-color:deepskyblue;
    border-color: deepskyblue;
    border-style: none;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-align: left;
}
.fakul__btn img {
    width: 32px;
    height: 32px;
    float: right;
}

.podraz__btn button {
    margin-top: 40px;
    width: 100%;
    padding: 30px 35px;
    border-radius: 5px;
    color: white;
    background-color:crimson;
    border-color: crimson;
    border-style: none;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-align: left;
}
.podraz__btn img {
    width: 32px;
    height: 32px;
    float: right;
}

.raspis__btn button {
    margin-top: 40px;
    width: 100%;
    padding: 30px 35px;
    border-radius: 5px;
    color: white;
    background-color: #50C878;
    border-color: #50C878;
    border-style: none;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-align: left;
}
.raspis__btn img {
    width: 32px;
    height: 32px;
    float: right;
}


@media(max-width: 992px) {
    .body__img img {
        margin-top: 30px;
    }
}
</style>