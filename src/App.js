import React from 'react'
import Router from './router/router'
import Header from './pages/Header/Header'
import MenuExampleHeader from './pages/Header/Header'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => {
  return(
    <div className='App' >
      <MenuExampleHeader/>
      <div >
        <Router/>
      </div>
    </div>
  )
}

export default App
