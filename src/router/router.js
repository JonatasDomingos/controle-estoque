import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Cadastro from '../pages/Usuario/Cadastro/Cadastro'
import Login from '../pages/Usuario/Login/Login'
import Home from '../pages/Home/Home'
import Erro from '../pages/Erro/Erro'


const Router = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/usuario/login" exact component={Login} />
        <Route path="/usuario/cadastro" exact component={Cadastro} />
        <Route path="*" component={Erro} />
      </Switch>
  </BrowserRouter>
)

export default Router
