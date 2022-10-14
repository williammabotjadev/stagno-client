import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import * as AWS from 'aws-sdk'

AWS.config.update({
  "region": process.env.REACT_APP_AWS_REGION,
  "secretAccessKey": process.env.REACT_APP_AWS_SECRET_KEY,
  "accessKeyId": process.env.REACT_APP_AWS_ACCESS_KEY_ID
})

console.log(AWS.config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log)
