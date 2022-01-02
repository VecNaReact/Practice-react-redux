const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-SER-PROFILE';

let initialState = {
    postData: [
        {id: 1, name: 'Emmanuel', message: 'Beautiful art', likesCount: 42},
        {id: 2, name: 'Frederick', message: 'I love to play the juggernaut', likesCount: 543},
    ],
    changeText: '',
    profile: null
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const upDataNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            return {...state, changeText: '', postData: [...state.postData, {id: 3, name: 'No name', message: state.changeText, likesCount: 0}]}
        }
        case UPDATE_NEW_POST_TEXT:
            return {...state, changeText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export default profileReducer