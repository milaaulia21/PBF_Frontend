import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleRegister } from '../api/authApi'
import { handleSubmit } from '../api/dosenApi'

export default function DosenRegister() {
    const [nama, setNama] = useState('')
    const [nip, setNip] = useState('')

    const navigate = useNavigate()

    const handleRegisterWrapper = async () => {
        try {
            const res = await handleSubmit(nama, nip)
            alert(res?.message || 'Gagal register');
            navigate(`/`)
        } catch (e) {
            alert(e.message || 'Terjadi kesalahan saat registrasi');
        }
    };

    return (
        <div className="min-h-[100dvh] min-w-[100dvw] bg-slate-100 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl flex flex-col justify-center overflow-hidden">
                <div className="px-1 py-4 bg-slate-900">
                    <h1 className="text-white text-center py-2 font-bold text-xl">DOSEN</h1>
                </div>
                <form
                    className="flex flex-col space-y-6 p-8"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleRegisterWrapper()
                    }
                    }>
                    <div className="flex flex-col space-y-6 my-4">

                        <div className='space-y-2'>
                            <label htmlFor="username" className='block font-medium text-sm text-slate-700'>Nama</label>
                            <input type="text" id="username" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="JohnDoe123" value={nama} onChange={(e) => setNama(e.target.value)} required />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="username" className='block font-medium text-sm text-slate-700'>Nomor Induk Pengajar</label>
                            <input type="text" id="username" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="12345678" value={nip} onChange={(e) => setNip(e.target.value)} required />
                        </div>

                    </div>
                    <button className='w-full bg-slate-900 text-white py-3 rounded-lg font-medium self-center px-9 mb-5 mt-10 hover:opacity-70 ease-in-out transition-all duration-150 focus:ring-2 focus:ring-offset-2 focus:ring-slate-600' type='submit'>BUAT AKUN</button>                  
                </form>
            </div>
        </div>
    )
}