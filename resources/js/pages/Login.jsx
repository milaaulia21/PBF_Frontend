import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProfile, handleLogin } from '../api/authApi'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useAuth } from '../lib/AuthContext'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { setProfile } = useAuth()

    const handleLoginWrapper = async (e) => {
        e.preventDefault()
        try {
            const res = await handleLogin(username, password)

            if (!res || !res.token) {
                alert('Username atau password salah');
                return;
            }

            localStorage.setItem('token', res.token)
            localStorage.setItem('role', res.role)

            const profileRes = await getProfile()
            if (profileRes && profileRes.user) {
                setProfile(profileRes.user)
            }

            const validTarget = ['dosen', 'mahasiswa']

            if (res.redirect && validTarget.includes(res.target)) {
                navigate(`/register/${res.target}-register`);
            } else {
                navigate('/landing-page');
            }


        } catch (e) {
            alert(e.message)
        }
    }

    const handleNavigateToRegister = () => {
        navigate('/register')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-1 bg-slate-800">
                    <h1 className="text-white text-center py-4 font-bold text-xl">LOGIN</h1>
                </div>

                <form className="p-8 space-y-6" onSubmit={handleLoginWrapper}>
                    {/* Username */}
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                            placeholder="Masukkan username"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent pr-10"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <MdOutlineVisibilityOff className="h-5 w-5 text-slate-500" />
                                ) : (
                                    <MdOutlineVisibility className="h-5 w-5 text-slate-500" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <button
                            type="button"
                            className="text-xs text-sky-600 hover:text-sky-500 focus:outline-none"
                        >
                            Lupa Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    >
                        LOGIN
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-slate-300"></div>
                        <span className="mx-4 text-sm text-slate-500">ATAU</span>
                        <div className="flex-grow border-t border-slate-300"></div>
                    </div>

                    {/* Register Button */}
                    <button
                        type="button"
                        onClick={handleNavigateToRegister}
                        className="w-full bg-white border border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    >
                        BUAT AKUN BARU
                    </button>
                </form>
            </div>
        </div>
    )
}
