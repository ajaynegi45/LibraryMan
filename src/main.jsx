import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import {BrowserRouter} from 'react-router-dom';
import {AppProvider} from "./Context.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(

    // <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                    <App/>
            </BrowserRouter>
        </AppProvider>
);