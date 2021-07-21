import {userAPI} from "../dal/api";

let initialState = {
    users: [],
    totalCountPages: 0,
    currentPage: 1,
    sizePage: 10,
    isFetching: true,
    loadFollowing: [],
    isLoadFollowing: false,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW-TOGGLE':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id)
                        u.followed ? u.followed = false : u.followed = true;
                    return u;
                })
            }
        case "ADD-USER":
            return {...state, users: action.users};
        case 'UPDATE-TOTAL-COUNT-PAGES':
            return {...state, totalCountPages: action.count}
        case 'UPDATE-CURRENT-PAGE':
            return {...state, currentPage: action.page}
        case 'UPDATE-IS-FETCHING':
            return {...state, isFetching: action.value}
        case 'UPDATE-LOAD-FOLLOWING':
            return {
                ...state, loadFollowing: action.isLoadFollowing
                    ? [...state.loadFollowing, action.id]
                    : state.loadFollowing.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const followToggle = (id) => {
    return {type: 'FOLLOW-TOGGLE', id}
}
export const addUser = (users) => {
    return {type: 'ADD-USER', users: users}
}
export const updateTotalCountPages = (count) => {
    return {type: 'UPDATE-TOTAL-COUNT-PAGES', count: count}
}
export const updateCurrentPage = (page) => {
    return {type: 'UPDATE-CURRENT-PAGE', page: page}
}
export const updateIsFetching = (value) => {
    return {type: 'UPDATE-IS-FETCHING', value: value}
}
export const updateLoadFollowing = (isLoadFollowing, id) => {
    return {type: 'UPDATE-LOAD-FOLLOWING', isLoadFollowing, id}
}
export const addUsers = (currentPage, sizePage) => {
    return (dispatch) => {
        dispatch(updateIsFetching(true));
        userAPI.RequestAllUsers(currentPage, sizePage).then(data =>
        {
            dispatch(addUser(data.items));
            dispatch(updateTotalCountPages(data.totalCount));
            dispatch(updateIsFetching(false));
        })
    }
}
export const clickPage = (sizePage, page) => {
    return (dispatch) => {
        dispatch(updateCurrentPage(page));
        dispatch(updateIsFetching(true));
        userAPI.RequestOtherPage(sizePage, page).then(data => {
            dispatch(addUser(data.items));
            dispatch(updateTotalCountPages(data.totalCount));
            dispatch(updateIsFetching(false));
        })
    }
}
export const clickSubscribe = (id) => {
    return (dispatch) => {
        dispatch(updateLoadFollowing(true, id));
        userAPI.RequestFollow(id).then(data => {
            if (data === 0) dispatch(followToggle(id));
            dispatch(updateLoadFollowing(false, id));
        })
    }
}
export const clickUnSubscribe = (id) => {
    return (dispatch) => {
        dispatch(updateLoadFollowing(true, id));
        userAPI.RequestUnFollow(id).then(data => {
            if (data === 0) dispatch(followToggle(id));
           dispatch(updateLoadFollowing(false, id));
        })
    }
}
export default usersReducer;