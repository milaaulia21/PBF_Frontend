import { createContext, useState, useEffect, useContext } from 'react'
import { getProfile, handleLogout as apiLogout } from '../api/authApi'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProfile = async () => {
        setLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setProfile(null)
                setLoading(false)
                return
            }
            const res = await getProfile()
            if (res && res.user) {
                setProfile(res.user)
            } else {
                setProfile(null)
            }
        } catch (err) {
            setProfile(null)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const logout = () => {
        apiLogout()
        setProfile(null)
    }

    return (
        <AuthContext.Provider value={{ profile, setProfile, loading, error, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
