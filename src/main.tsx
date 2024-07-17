import React from 'react'
import ReactDOM from 'react-dom/client'
import { OmdbApp } from './OpenMediaDBApp.tsx'
// import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <OmdbApp />
  </React.StrictMode>
)
