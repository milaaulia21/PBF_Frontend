import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import DataProvider from './lib/DataContext';
import { AuthProvider, useAuth } from './lib/AuthContext';
import Loading from './components/Loading';

function App() {
    const { loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    return (
        <Router />
    );
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
