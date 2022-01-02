const SEND_MESSAGE = 'SEND_MESSAGE'
const UP_DATA_NEW_MESSAGE_BODY = 'UP_DATA_NEW_MESSAGE_BODY'

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (textBody) => ({type: UP_DATA_NEW_MESSAGE_BODY, body: textBody})

let initialState = {
    messagesData: [
        {id: "1", latter: "How do you like Dota?"},
        {id: "2", latter: "i'd like to order online"},
        {id: "3", latter: "I need to go"},
    ],
    dialogsData: [
        {id: "1", name: 'Danil'},
        {id: "2", name: 'Ramis'},
        {id: "3", name: 'Imil'},
        {id: "4", name: 'Alay'},
        {id: "5", name: 'Milana'},
        {id: "6", name: 'Oskar'},
        {id: "7", name: 'Korzh'}
    ],
    newMessageBody: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return  {...state, newMessageBody: '', messagesData: [...state.messagesData, {id: "4", latter: body} ]}
        case UP_DATA_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export default messageReducer