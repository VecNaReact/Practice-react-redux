import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store