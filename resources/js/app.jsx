import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import DataProvider from './lib/DataContext';

function App() {
    return (
        <Router />
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <App />
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>
);
