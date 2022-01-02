import {usersAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: userId, email, login})

export const getMyName = () => {
    return (dispatch) => {
        usersAPI.myAuth()
            .then(date => {
           if(date.resultCode === 0){
               let {data, email, login} = date.data
               dispatch(setAuthUserData(data, email, login ))
           }
        })
    }

}

let initialState = {
    id:   null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default:
            return state
    }
}

export default authReducer