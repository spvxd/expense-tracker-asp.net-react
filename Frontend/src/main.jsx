import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalProvider>
        <App/>
        </GlobalProvider>
    </>
)
