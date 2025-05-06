import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import DataProvider from './lib/DataContext';
import { AuthProvider } from './lib/AuthContext';

function App() {
    return (
        <Router />
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
