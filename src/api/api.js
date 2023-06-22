import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "11c88bea-a40a-43b8-8dc4-2a87fff1cf34",
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },


}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                    return response.data;
                }
            )
    }
}