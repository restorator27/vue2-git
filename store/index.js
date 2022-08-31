// state - содержит state
// mutation - делает мутацию
// action - грузятся данные с сервера и вызывает мутацию
// getters - useSelector

export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },
    clearToken(state, token){
        state.token = null
    }
}

export const actions = {
    // Узнать когда приложение стартует
    // Вызывается один раз только на серверной части
    nuxtServerInit({dispatch}){
        console.log("nuxtServerInit");
    },
    // Auth
    login({commit}){
        commit("setToken", "trueToken")
    },
    logout({commit}){
        commit("clearToken")
    }
}


export const getters = {
    hasToken: state => !!state.token
}