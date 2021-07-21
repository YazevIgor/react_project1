import {profileAPI} from "../dal/api";

let initialState = {
    postsData: [
        {post: "Ya poel", id: 1},
        {post: "Ya pospal", id: 2},
        {post: "Ya ustal", id: 3}],
    postText: '',
    photo: null,
    status: '',
    isFetching: false,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    contacts: [],
    fullName: null,
    aboutMe: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, postsData: [...state.postsData, {post: state.postText}], postText: ''};
        case 'ADD-DATA-POSTS-TEXT':
            return {...state, postText: action.postText};
        case 'ADD-DATA-PHOTO':
            return {...state, photo: action.photo}
        case 'UPDATE-MY-STATUS':
            return {...state, status: action.status}
        case 'UPDATE-IS-FETCHING':
            return {...state, isFetching: action.value}
        case 'UPDATE-LOOKING-FOR-A-JOB':
            return {...state, lookingForAJob: action.value}
        case 'UPDATE-LOOKING-FOR-A-JOB-DESCRIPTION':
            return {...state, lookingForAJobDescription: action.text}
        case 'UPDATE-CONTACTS':
            return {...state, contacts: action.contacts}
        case 'UPDATE-FULL-NAME':
            return {...state, fullName: action.name}
        case 'UPDATE-ABOUT-ME':
            return {...state, aboutMe: action.text}
        default:
            return state;
    }
}
export const addPostCreateAction = () => {
    return {type: 'ADD-POST'}
}
export const addDataPostTextCreateAction = (text) => {
    return {type: 'ADD-DATA-POSTS-TEXT', postText: text};
}
export const addDataPhoto = (photo) => {
    return {type: 'ADD-DATA-PHOTO', photo};
}
export const updateMyStatus = (status) => {
    return {type: 'UPDATE-MY-STATUS', status};
}
export const updateIsFetching = (value) => {
    return {type: 'UPDATE-IS-FETCHING', value: value}
}
export const updateLookingForAJob = (value) => {
    return {type: 'UPDATE-LOOKING-FOR-A-JOB', value: value}
}
export const updateLookingForAJobDescription = (text) => {
    return {type: 'UPDATE-LOOKING-FOR-A-JOB-DESCRIPTION', text}
}
export const updateContacts = (contacts) => {
    return {type: 'UPDATE-CONTACTS', contacts}
}
export const updateFullName = (name) => {
    return {type: 'UPDATE-FULL-NAME', name}
}
export const updateAboutMe = (text) => {
    return {type: 'UPDATE-ABOUT-ME', text}
}

export const getUserPhoto = (id) => {
    return (dispatch) => {
        profileAPI.GetUserProfile(id).then(data => {
            dispatch(addDataPhoto(data))
        })
    }
}
export const getMyStatus = (id) => async (dispatch) => {
    dispatch(updateIsFetching(true));
    let response = await profileAPI.GetMyStatus(id);
    dispatch(updateMyStatus(response))
    dispatch(updateIsFetching(false));
}
export const getMyUserData = (id) => async (dispatch) => {
    dispatch(updateIsFetching(true));
    let response = await profileAPI.GetMyUserData(id);
    dispatch(updateIsFetching(false));
    dispatch(updateFullName(response.fullName))
    dispatch(updateLookingForAJob(response.lookingForAJob))
    dispatch(updateLookingForAJobDescription(response.lookingForAJobDescription))
    dispatch(updateContacts(Object.values(response.contacts)))
    dispatch(updateAboutMe(response.aboutMe))
}
export const setMyStatus = (status) => async (dispatch) => {
    let response = await profileAPI.SetMyStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateMyStatus(status))
    }
}
export const setMyPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.SetMyPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(addDataPhoto(response.data.data.photos.large));
    }
}
export const setMyUserData = (lookingForAJob,lookingForAJobDescription,fullName,contacts,aboutMe) => async (dispatch) => {
    let response = await profileAPI.SetMyUserData(lookingForAJob,lookingForAJobDescription,fullName,contacts,aboutMe);
    if (response.data.resultCode === 0) {
        dispatch(updateFullName(fullName))
        dispatch(updateLookingForAJob(lookingForAJob))
        dispatch(updateLookingForAJobDescription(lookingForAJobDescription))
        dispatch(updateContacts(Object.values(contacts)))
        dispatch(updateAboutMe(aboutMe))
    }
}

export default profileReducer;