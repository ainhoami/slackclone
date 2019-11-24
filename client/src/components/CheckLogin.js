import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks'
// import Dashboard from "./Dashboard"
// import Login from './Login'
import Routes from "./Routes"


//check if is authentic.. and if is not, will redirect to login
export default props => {
const { isAuthenticated } = useAuth()
return isAuthenticated ? ( //si esta autenticado, muestra los path que hay en routes
    <Routes />

): (
    <Redirect to="/login" />
)



    // return isAuthenticated ? (<Route path="/" component ={Dashboard} /> // solo muestra este component si han hecho login
    //  ): (<Redirect to="/login"/>
    //     )

}