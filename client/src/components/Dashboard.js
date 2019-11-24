import React, { useState } from 'react'
import { useAuth, useChat } from '../hooks'

export default props => {
    const { username, signout } = useAuth()
    const [ message, setMessage] = useState('')
    const { messages, users, add } = useChat()

    function handleSubmit(e) {
        e.preventDefault()
        add({message, username})
        setMessage("")
    }

    //solo llega aqui si el login es ok

    return (
        <div>
            <h1>Hello {username}!</h1>
            <button onClick={e => signout()}>Sign Out</button>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div id="chat">
                <div id="users">
                    {users.map((u, i) => (
                        <p key={"user" + i}>{u.username}</p>
                    ))}
                </div>
                <div id="messages">
                    {messages.map((msg, i) => (
                        <p key={"message" + i}>{msg.username}: {msg.message}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}