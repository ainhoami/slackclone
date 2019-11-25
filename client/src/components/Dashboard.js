import React, { useState } from 'react'
import { useAuth, useChat } from '../hooks'
import I from "../lib/Icon"

export default props => {
    const { username, signout } = useAuth()
    const [ message, setMessage] = useState('')
    const { messages, users, add } = useChat()

    // const reverse=messages.reverse()
    function handleSubmit(e) {
        e.preventDefault()
        add({message, username})
        setMessage("")
    }

    //solo llega aqui si el login es ok

    return (
      
        <div className="chatcontainer">
            <header>
              <h1>Hello {username}!</h1>
              <button onClick={e => signout()}><I icon={"power-off"}/></button>
              </header>
            <div id="chat">
                <div id="users">
                    {users.map((u, i) => (
                        <p key={"user" + i}>{u.username}</p>
                    ))}
                </div>
                <div className="messytextbox">     

                    <div id="messages">
                        {messages.map((msg, i) => (
                            <p key={"message" + i}><span className="bold">{msg.username}:</span> {msg.message}</p>
                        ))}
                    </div>
                        <form onSubmit={handleSubmit}>
                          <input
                              type="text"
                              value={message}
                              placeholder="Message"
                              onChange={e => setMessage(e.target.value)}
                          />
                          {/* <button type="submit">Submit</button> */}
                      </form>
                  </div>
              </div>
          </div>
    )
}