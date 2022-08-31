<template>
    <nav>
        <a href="#">NUXT SSR</a>
        <div>
            <ul>
                <!-- так страница перезагружается -->
                <!-- используй nuxt-link -->
                <!-- <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li> -->
                <li>
                    <nuxt-link exact active-class="active" to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about" active-class="active">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/users" active-class="active">Users</nuxt-link>
                </li>
                <li v-if="!hasToken">
                    <nuxt-link to="/login" active-class="active">Login</nuxt-link>
                </li>
                <li v-else>
                    <a @click.prevent="logout" to="#" active-class="active">Logout</a>
                </li>
                <li>
                    <nuxt-link to="/posts" active-class="active">Posts</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/simplevue" active-class="active">Simple Vue</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script >
export default {
    computed: {
        hasToken(){
            return this.$store.getters.hasToken
        }
    },
    methods: {
       logout(){
            this.$store.dispatch("logout")
            this.$router.push("/login")
       }
    }
}
</script>

<!-- <nuxt-link exact active-class="active" to="/">Home</nuxt-link>
exact + active-class определяет активность и добавляет class active в css
no-prefetch - параметр для отмены предзагрузки неактивных страниц / компонентов 
