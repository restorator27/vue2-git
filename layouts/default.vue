<template>
    <div>
        <NavBar/>
        <nuxt/> 
        <p>hell</p>
    </div>
</template>

<script>
import NavBar from "../components/navbar/NavBar.vue"
export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>

<!-- <nuxt/> - место куда вставляется pages (as OUTLET in react) -->