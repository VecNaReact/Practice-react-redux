import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '83de2cba-9318-4bd6-a90f-a6dd4b21d40d'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
   unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id){
          return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    myAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    redirectToUser(invoiceId, setUserProfile) {
        return async () => {
            await instance.get(`profile/${invoiceId}`).then(response => {
                setUserProfile(response.data)
                console.log(response)
            })
        }
    }
}
