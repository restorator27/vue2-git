<template>
    <section>
        <h1>Error 404</h1>
        <nuxt-link to="/">Home</nuxt-link>
    </section>
</template>

<style scoped>
    section {
        background: rgb(227, 143, 143);
        width: 600px;
        height: 400px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<!-- страница для ошибок (зарезервированное название) 
будет отобрадаться когда не отработает роутинг (если для пути нет страницы)
