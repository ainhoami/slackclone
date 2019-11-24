import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login'
import CheckLogin from "./CheckLogin"
import Dashboard from "./Dashboard"
import Register from "./Register"

function App() {
  return (
    <div>
      <Router>
        <Switch>
         <Route path="/login" component={Login}/> 
         <Route path ="/register" component={Register}/>
          <Route path="*" component={CheckLogin}/>
          </Switch>
      </Router> 
     </div>
  )
}

export default App
