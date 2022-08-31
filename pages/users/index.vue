<template>
    <section>
        <h1>Users Page</h1>
        <ul>
            <li v-for="user of users" :key="user.id">
                <a href="#" @click.prevent="openUser(user)">User: {{user.name}}</a>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    // аналог mounted только данные будут генерироваться на сервере
    // принимает контекст, где можно забрать модуль
    async asyncData({$axios}){
        const users = await $axios.$get("https://jsonplaceholder.typicode.com/users")
        // возаращаемое згачение будет работать с полем data
        return {users}
    },

    data: () => ({
        users: []
    }),

    // // данные будут генерироваться на клиенте
    // async mounted(){
    //    this.users = await this.$axios.$get("https://jsonplaceholder.typicode.com/users")
    // },

    methods: {
        openUser(user){
            this.$router.push("/users/" + user.id) 
        }
    }
}

</script>
