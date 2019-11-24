import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login'
import CheckLogin from "./CheckLogin"
import Dashboard from "./Dashboard"

function App() {
  return (
    <div>
      <Router>
        <Switch>
         <Route path="/login" exact component={Login}/> 
          <Route path="*" component={CheckLogin}/>
          </Switch>
      </Router> 
     </div>
  )
}

export default App
