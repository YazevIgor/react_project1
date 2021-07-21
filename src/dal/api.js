import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "ae9aaad4-5bce-4a79-825e-a8b0034d0095"}
})

export const userAPI = {
    RequestAllUsers(currentPage, sizePage) {
        return instance.get(`users?page=${currentPage}&count=${sizePage}`).then(response => {
            return response.data
        })
    },
    RequestOtherPage(sizePage, page) {
        return instance.get(`users?page=${page}&count=${sizePage}`).then(response => {
            return response.data;
        })
    },
    RequestFollow(id) {
        return instance.post(`follow/` + id).then(response => {
            return response.data.resultCode;
        })
    },
    RequestUnFollow(id){
        return instance.delete(`follow/` + id).then(response => {
            return response.data.resultCode;
        })
    }
}

export const profileAPI = {

    GetUserProfile(id) {
        return instance.get(`profile/` + id).then(response => {
            return response.data.photos.large
        })
    },
    GetMyStatus(id) {
        return instance.get(`profile/status/` + id).then(response => {
            return response.data;
        })
    },
    GetMyUserData(id) {
        return instance.get(`profile/` + id).then(response => {
            return response.data;
        })
    },
    SetMyStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    SetMyUserData(lookingForAJob,lookingForAJobDescription,fullName,contacts,aboutMe) {
        return instance.put(`profile/`, {
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription,
            fullName: fullName,
            contacts:contacts,
            aboutMe:aboutMe  });
    },
    SetMyPhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {headers: {'Content-type': 'multipart/form-data'}});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response =>{
            return response.data
        })
    }
}
