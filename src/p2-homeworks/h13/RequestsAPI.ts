import axios from "axios";
// https://neko-cafe-back.herokuapp.com/auth/test

// body: {success: true}

//без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)

export const requestsAPI = {
    changeStatus(status:boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{body:{success: status}})
    }
}