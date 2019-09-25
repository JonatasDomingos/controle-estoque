import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import * as serviceWorker from "./serviceWorker"
import "./index.css"
import App from "./App"
import myStore from "./store/store"



ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, 

document.getElementById("root"))

serviceWorker.unregister()
