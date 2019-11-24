import React, { useState} from 'react'
import { useAuth } from '../hooks'


export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')

const { signin } = useAuth()

function handlesubmit(e){
    e.preventDefault()

    signin(username,password) //after signin we want to redirect to another page
    .then((resp)=>{
        props.history.push("/")

    }) 
    .catch(e => {
        console.log(username + password + " user and password")

        console.log("LOGIN ERROR")
    })
// needs to be a promise because if not it will redirect before everything is done.
    //the "/" takes us to "*" in app.js that take us to checklogin. this check if it's authenticated shows dashboard if not, redirect to login

}

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name ="username" placeholder="password" value={username} onChange={e=>setUsername(e.target.value)}/>
                <input type="text" name = "password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}