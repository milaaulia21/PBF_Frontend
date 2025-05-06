import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const token = localStorage.getItem('token')

    // Stricter token validation similar to ProtectedRoute
    if (token === null || token === 'undefined' || token.trim() === '') {
        return <Outlet />
    }

    return <Navigate to="/landing-page" replace/>
}

export default PublicRoute