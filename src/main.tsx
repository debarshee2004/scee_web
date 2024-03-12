import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './style/main.css'
import Cursor from './components/Cursor/Cursor.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Cursor/>
    <Navbar/>
    <App />
  </React.StrictMode>,
)
