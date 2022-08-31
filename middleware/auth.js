// пример миддлвара, который будет защищать страницу about 
// от не залогиненных пользователей
export default function({store, redirect}){
    if(!store.getters.hasToken){
        redirect('/login?message=login')
    }
}