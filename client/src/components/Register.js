import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import "../styles/base.css"

export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')

const { reg } = useAuth()

function handlesubmit(e){
    e.preventDefault()

    reg(username,password) //after signin we want to redirect to another page
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
        <div className="reg">
            <h1> Sign up</h1>
            <form onSubmit={handlesubmit}>
                <div className="inputs">
                    <input type="text" name ="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                    <input type="text" name = "password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className="button">
                    <button type="submit">Register</button>
                </div>
            </form>
            <div className="toTheOtherForm">
            <p> Already registered? </p>
            <p className="toLogin"><Link to="/login">Login</Link></p>
            </div>

        </div>
    )
}