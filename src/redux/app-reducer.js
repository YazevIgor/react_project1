import {authAPI} from "../dal/api";
import {addUserLoginData} from "./header-reducer";

let initialState = {
    initial: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL-APP':
            return {...state, initial: action.status}
        default:
            return state;
    }
}

export const initialApp = (status) => {
    return {type: 'INITIAL-APP', status}
}

export const authMe = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.resultCode === 0){
            dispatch(addUserLoginData(response.data))
        }
    })
}
export const initializeApp = () =>  (dispatch) => {
    let promise = dispatch(authMe());
    Promise.all([promise]).then(()=>{
        dispatch(initialApp(true));
    })
}

export default appReducer;