import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return(
  <Router>
    <div className='App'>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/usuario/login' component={Login}/>
        <Route path='/usuario/cadastro' component={Cadastro}/>
      </Switch>
    </div>
  </Router>
  )
}

export default App
