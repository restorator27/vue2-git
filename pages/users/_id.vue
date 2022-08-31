<template>
    <section>
        <h1>User {{$route.params.id}}</h1>
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
    </section>
</template>

<script>
export default {
    // встроенный метод валидации
    // возвращает true (можно заходить) / false (нельзя)
    // принимает context где есть params
    validate({ params }){ 
        console.log("validate");
        return /^\d+$/.test(params.id) // простая валидация на число
    },
    async asyncData({$axios, params}){
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        // возаращаемое згачение будет работать с полем data
        // console.log(user)
        return {user}
    },
    // тут нет поля data, vue умный сам отдает результат asyncData в template
}
</script>

<style>

</style>

<!-- $route.params.id 
id - подтягивается из [_id].vue

this.$router.push("/users/" + user) - передается параметр (useNavigate)