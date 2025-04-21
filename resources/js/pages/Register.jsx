import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleRegister } from '../api/JWTAuthApi'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    const navigate = useNavigate()

    const handleTogglePassword = () => {
        setIsClicked(!isClicked)
    }

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
                    className="flex flex-col w-full max-w-md mx-auto p-8 rounded-lg border">
                    <h1 className="w-full mb-8 font-bold text-2xl text-center py-5 border-b">Registrasi</h1>
                    <div className="flex flex-col space-y-6 my-4">
                        <div className='flex gap-4 items-center'>
                            <label htmlFor="firstName" className='font-semibold text-sm'>Nama Depan</label>
                            <input type="text" id="firstName" className="bg-slate-100 py-3 px-4 rounded-md flex-1 focus:ring-2 focus:ring-slate-200 focus:border-transparent" placeholder="John" required />
                        </div>

                        <div className='flex gap-4 items-center'>
                            <label htmlFor="lastName" className='font-semibold text-sm'>Nama Belakang</label>
                            <input type="text" id="lastName" className="bg-slate-100 py-3 px-4 rounded-md flex-1" placeholder="Doe" required />
                        </div>

                        <div className='flex gap-4 items-center'>
                            <label htmlFor="username" className='font-semibold text-sm'>Nama Pengguna</label>
                            <input type="text" id="username" className="bg-slate-100 py-3 px-4 rounded-md flex-1" placeholder="Masukkan Kata Sandi" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        <div className='flex gap-4 items-center'>
                            <label htmlFor="password" className='font-semibold text-sm'>Kata Sandi</label>
                            <input type="password" id="password" className="bg-slate-100 py-3 px-4 rounded-md flex-1" placeholder="Masukkan Kata Sandi" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <p className='hover:scale-105 cursor-pointer' onClick={handleTogglePassword}>{isClicked?<MdOutlineVisibilityOff /> : <MdOutlineVisibility /> }</p>
                        </div>
                        
                        <div className='flex gap-4 items-center'>
                            <label htmlFor="passwordConfirmator" className='font-semibold text-sm'>Konfirmasi Kata Sandi</label>
                            <input type="password" id="passwordConfirmator" className="bg-slate-100 py-3 px-4 rounded-md flex-1" placeholder="Konfirmasi Kata Sandi" required />
                        </div>
                    </div>
                    <button className='bg-slate-900 text-white py-2 rounded-lg w-fit self-center px-5 mb-5 mt-10 hover:opacity-70 ease-in-out transition-all duration-150' type='submit'>Daftar</button>
                    <a onClick={() => navigate('/')}>
                        Sudah Punya Akun? 
                        <span  className="ms-2 text-sky-500 underline hover:opacity-70 ease-in-out transition-all duration-150 italic cursor-pointer">Login</span>
                    </a>
                </form>
            </div>
        </div>
    )
}