import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID
}

AWS.config.update({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID
})

console.log(process.env.AWS_REGION)

AWS.config.region = process.env.AWS_REGION
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
