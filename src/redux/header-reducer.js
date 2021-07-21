import {profileAPI} from "../dal/api";


let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    photo: null
};

const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-USER-LOGIN-DATA':
            return {...state, email: action.userLoginData.email, id: action.userLoginData.id, login: action.userLoginData.login, isAuth: true};
        case 'ADD-USER-PHOTO':
            return {...state, photo: action.userPhoto}
        default: return state;
    }
}
export const addUserLoginData = (userLoginData) => {
    return {type: 'ADD-USER-LOGIN-DATA', userLoginData}
}
export const addUserPhoto = (userPhoto) => {
    return {type: 'ADD-USER-PHOTO', userPhoto}
}

export const getAuthUserPhoto = (id) => {
    return (dispatch) => {
        profileAPI.GetUserProfile(id).then(data => {
            dispatch(addUserPhoto(data))
        })
    }
}


export default headerReducer;