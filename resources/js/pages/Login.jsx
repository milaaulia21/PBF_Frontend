import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/landingpage')
    }

    return (
        <div className="min-h-[100dvh] min-w-[100dvw] flex justify-center items-center">
            <div className="w-full flex justify-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleNavigate()
                }
                }
                    className="flex flex-col px-16 py-10 w-fit rounded-lg border">
                    <h1 className="w-full my-5 font-semibold text-3xl text-center">Login Penjadwalan Sidang Tugas Akhir</h1>
                    <div className="flex flex-col gap-4 my-4">
                        <input type="text" id="username" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Username" required />
                        <input type="text" id="username" className="bg-slate-100 py-3 px-2 rounded md" placeholder="Password" required />
                    </div>
                    <button className='bg-slate-600 text-white py-2 rounded-lg mt-10 mb-5 hover:opacity-70 ease-in-out transition-all duration-150' type='submit'>Login</button>
                    <div className="flex gap-2 items-center">
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                        <p className="">OR</p>
                        <div className="bg-slate-300 w-full h-[1px]"></div>
                    </div>
                    <button className='bg-slate-600 text-white py-2 rounded-lg my-5 hover:opacity-70 ease-in-out transition-all duration-150' type='submit'>Register</button>
                    <a className="text-xs text-sky-500 underline hover:opacity-70 ease-in-out transition-all duration-150">Forgot Password?</a>
                </form>
            </div>
        </div>
    )
}