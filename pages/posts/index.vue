<template>
    <section>
        <h1>Posts Page</h1>
        <ul>
            <li v-for="post of posts" :key="post.id">
                <a href="#" @click.prevent="openPost()">{{post.title}}</a>
            </li>
        </ul>
        <button @click.prevent="doingSmth()">click</button>
    </section>
</template>

<script>

export default {
    // fetch - метод для работы со state в vuex
    // работает аналогично с asyncData, только не нужно ничего возвращать
    // принимает на вход контекст где есть store
    async fetch({store}){
        if(store.getters["posts/posts"].length === 0){ // // название модуля vuex / поле в store
            await store.dispatch("posts/fetchTodos"); // название модуля vuex / метод action'a
        }
    },

    // data: () => ({
    //     posts: []
    // }), 


    computed: {
        posts(){
            return this.$store.getters["posts/posts"]; // название модуля vuex / поле в store
        }
    },

    methods: {
        openPost(){
            console.log(this.$store.getters)
        },
        doingSmth(){
            console.log("hell")
        }
    }
}

</script>