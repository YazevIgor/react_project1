import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleWare from "redux-thunk"
import appReducer from "./app-reducer";

let reducers = combineReducers( {
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    authUser: headerReducer,
    app: appReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
