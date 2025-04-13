import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleRegister } from '../api/JWTAuthApi'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleRegisterWrapper = async () => {
        try {
            const res = await handleRegister(username, password);
            alert(res?.message || 'Gagal register');
            navigate('/')
        } catch (e) {
            alert(e.message || 'Terjadi kesalahan saat registrasi');
        }
    };

    return (
        <div className="min-h-[100dvh] min-w-[100dvw] flex justify-center items-center">
            <div className="w-full flex justify-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleRegisterWrapper()
                }
                }
                    className="flex flex-col px-16 py-10 w-[40rem] rounded-lg border">
                    <h1 className="w-full my-5 font-semibold text-3xl text-center">Registrasi</h1>
                    <div className="flex flex-col gap-4 my-4">
                        <input type="text" id="username" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="text" id="username" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className='bg-slate-600 text-white py-2 rounded-lg mb-5 mt-10 hover:opacity-70 ease-in-out transition-all duration-150' type='submit'>Register</button>
                    <div className="flex gap-2 items-center">
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                        <p className="">OR</p>
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                    </div>
                    <button type="button" className='bg-white border border-slate-700 text-slate-600 py-2 rounded-lg my-5 hover:bg-slate-800 hover:text-white ease-in-out transition-all duration-150' onClick={() => navigateToLoginPage()}>Login</button>
                    <a className="text-xs text-sky-500 underline hover:opacity-70 ease-in-out transition-all duration-150">Forgot Password?</a>
                </form>
            </div>
        </div>
    )
}