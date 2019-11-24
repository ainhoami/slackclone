import React , { useState }from 'react'
import { useAuth, useChat } from '../hooks'
import "../redux/ducks/chat"
import {Link} from 'react-router-dom'

export default props => {
    const {username, signout} = useAuth()
    const { messages, added } = useChat()
    const [message, setMessage] = useState('')

    function handleSubmit(e){
      e.preventDefault()
      added(message)
      setMessage("")
    }

  //solo se muestra este component si se ha hecho login
    return (
    <div>
    <h1> hello {username}</h1> 
    {/* <Link to="/about">About Me</Link> */}
    <button onClick={e=>signout()}>Sign out</button>

<form onSubmit={handleSubmit}>
  <input type="text" 
  value = {message}
  onChange={e=>setMessage(e.target.value)}
  />
  <button type="submit">Submit</button>
</form>

    {messages.map((m,i) => (
      <p key ={"message" + i}>{m}</p>
    ))}
    </div>
)
}
