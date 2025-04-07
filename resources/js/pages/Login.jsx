import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { handleLogin } from '../api/JWTAuthApi'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLoginWrapper = async () => {
        try{
            const res = await handleLogin(username, password)

            if (!res || !res.token) {
                alert('Username atau password salah');
                return;
            }
    
            handleNavigateToLandingPage()
        }catch(e){
            alert(e.message)
        }
    }

    const handleNavigatetoRegister = () => {
        navigate('/register')
    }

    const handleNavigateToLandingPage = () => {
        navigate('/landing-page')
    }


    return (
        <div className="min-h-[100dvh] min-w-[100dvw] flex justify-center items-center">
            <div className="w-full flex justify-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleLoginWrapper()
                }
                }
                    className="flex flex-col px-16 py-10 w-[40rem] rounded-lg border">
                    <h1 className="w-full my-5 font-semibold text-3xl text-center">Login</h1>
                    <div className="flex flex-col gap-4 my-4">
                        <input type="text" id="username" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="text" id="password" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className='bg-slate-600 text-white py-2 rounded-lg mt-10 mb-5 hover:opacity-70 ease-in-out transition-all duration-150' type='submit'>Login</button>
                    <div className="flex gap-2 items-center">
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                        <p className="">OR</p>
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                    </div>
                    <button type="button" className='bg-white border border-slate-700 text-slate-600 py-2 rounded-lg my-5 hover:bg-slate-800 hover:text-white ease-in-out transition-all duration-150' onClick={handleNavigatetoRegister}>Register</button>
                    <a className="text-xs text-sky-500 underline hover:opacity-70 ease-in-out transition-all duration-150">Forgot Password?</a>
                </form>
            </div>
        </div>
    )
}