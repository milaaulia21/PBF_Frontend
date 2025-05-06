import { createContext, useState, useEffect, useContext } from 'react'
import { getProfile } from '../api/authApi'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await getProfile()
            if (res && res.user) {
                setProfile(res.user)
            }
        }
        fetchProfile()
    }, [])

    return (
        <AuthContext.Provider value={{ profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
