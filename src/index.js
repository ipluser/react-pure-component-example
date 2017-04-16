import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './app'
import PureApp from './pure-app'

import store from './store'

ReactDOM.render(
  <div className="container">
    <App />
    <PureApp />
  </div>,
  document.getElementById('view'),
)

setInterval(() => {
  store.dispatch({ type: 'produce' })
}, 2000)
