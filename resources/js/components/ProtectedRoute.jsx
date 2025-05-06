import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProtectedRoute = () => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/" replace />
    }

    try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000 // in seconds

        if (decoded.exp && decoded.exp < currentTime) {
            console.warn('Token expired')
            localStorage.removeItem('token')
            return <Navigate to="/" replace />
        }
    } catch (error) {
        console.warn('Invalid token')
        localStorage.removeItem('token')
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default ProtectedRoute
