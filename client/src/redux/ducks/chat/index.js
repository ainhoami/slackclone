import { useEffect } from 'react'
import io from "socket.io-client"
import { useSelector, useDispatch } from 'react-redux'


//ip here
const socket = io("http://192.168.0.24:8080",{
    transports: ["websocket"]
})

const ADD_MESSAGE='chat/ADD_MESSAGE'

const initialState={
    messages: []
}


export default (state=initialState, action) =>{
    switch(action.type)
    {
        case ADD_MESSAGE:
            return {...state, messages:[...state.messages, action.payload]}
        default:
        return state
    }

}

function addMessage(message){
    return {
        type: ADD_MESSAGE,
        payload:message
    }
}

// function add(message)
// {
//     return dispatch =>{
//         socket.emit ("message", "this is a socket message")
//         socket.on("message",message => {
//             console.log(message)
//             dispatch(addMessage(message))
//         })
   
//     }
// }



export function useChat(){
    const dispatch = useDispatch()
    const messages = useSelector (appState => appState.chatState.messages)
    // const add = (message) => dispatch(add(message))
    const added = (message) => socket.emit("message", message)

    

    useEffect(()=>{
        socket.on("message", message => {
            dispatch(addMessage(message))
        })
    

    }, [dispatch])

    return { added, messages}
}