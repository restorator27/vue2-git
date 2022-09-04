<template>
    <section>
        <h2 v-if="$route.query.message">
            Need Login First please
        </h2>
        <form @submit.prevent="onSubmit">
            <div>
                <input type="text">
            </div>
            <p>
                <nuxt-link to="/">To home page</nuxt-link>
            </p>
            <button type="submit">Login</button>
        </form>
    </section>
</template>

<script>
    // с каким layout будет отображаться компонент
    export default {
        layout: "empty",
        methods: {
            onSubmit(){
                this.$store.dispatch("login") // для корневого модуля не нужно прописывать модуль стора
                this.$router.push("/")
            }
        }
    }
</script>