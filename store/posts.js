// state - содержит state
// mutation - делает мутацию
// action - грузятся данные с сервера и вызывает мутацию
// getters - useSelector

export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, posts){
        state.posts = posts
    }
}

export const actions = {
    async fetchTodos({commit}){
        const posts = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts`)
        // console.log(posts)
        commit("setPosts", posts)
    }
}

export const getters = {
    posts: state => state.posts
}