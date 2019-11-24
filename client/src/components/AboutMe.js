import React from 'react'
import { useAuth } from '../hooks'

export default props => {
    const {username} = useAuth()

    return <h1> Mi name is {username}</h1> //solo se muestra este component si se ha hecho login
}
