import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSubmit } from '../api/mahasiswaApi'

export default function MahasiswaRegister() {
    const [nama, setNama] = useState('')
    const [nim, setNim] = useState('')
    const [prodi, setProdi] = useState('')
    const [tahunAkademik, setTahunAkademik] = useState('')
    const [judulSkripsi, setJudulSkripsi] = useState('')

    const navigate = useNavigate()

    const handleRegisterWrapper = async () => {
        try {
            const res = await handleSubmit(nama, nim, prodi, tahunAkademik, judulSkripsi)
            console.log(res)
            navigate('/')
        } catch (e) {
            alert(e.message || 'Terjadi kesalahan saat registrasi');
        }
    };

    return (
        <div className="min-h-[100dvh] min-w-[100dvw] bg-slate-100 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl flex flex-col justify-center overflow-hidden">
                <div className="px-1 py-4 bg-slate-900">
                    <h1 className="text-white text-center py-2 font-bold text-xl">LENGKAPI DATA ANDA</h1>
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
                            <label htmlFor="nama_mahasiswa" className='block font-medium text-sm text-slate-700'>Nama Lengkap</label>
                            <input type="text" id="nama_mahasiswa" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="John Doe" value={nama} onChange={(e) => setNama(e.target.value)} required />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="nim_mahasiswa" className='block font-medium text-sm text-slate-700'>Nomor Induk Mahasiswa</label>
                            <input type="text" id="nim_mahasiswa" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="12345678" value={nim} onChange={(e) => setNim(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="prodi" className='block font-medium text-sm text-slate-700'>Program Studi</label>
                            <select name="prodi" id="prodi" value={prodi} onChange={(e) => setProdi(e.target.value)} className="border w-full px-3 py-2 border-slate-300 rounded-lg focus:ring-2 text-slate-700" required>
                                <option>Pilih Program Studi</option>
                                <option value="D3 TI">D-III Teknik Informatika</option>
                                <option value="D4 RPL">D-IV Rekayasa Perangkat Lunak</option>
                                <option value="D4 ALKS">D-IV Akutansi Lembaga Keuangan Syariah</option>
                                <option value="D4 RKS">D-IV Rekayasa Perangkat Lunak</option>
                            </select>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="year" className='block font-medium text-sm text-slate-700'>Tahun Akademik</label>
                            <input type="year" id="year" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="2025/2026" value={tahunAkademik} onChange={(e) => setTahunAkademik(e.target.value)} required />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="judul_skripsi" className='block font-medium text-sm text-slate-700'>Judul Skripsi</label>
                            <input type="text" id="judul_skripsi" className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2" placeholder="Judul Skripsi Anda" value={judulSkripsi} onChange={(e) => setJudulSkripsi(e.target.value)} required />
                        </div>


                    </div>
                    <button
                        className='w-full bg-slate-900 text-white py-3 rounded-lg font-medium self-center px-9 mb-5 mt-10 hover:opacity-70 ease-in-out transition-all duration-150 focus:ring-2 focus:ring-offset-2 focus:ring-slate-600'
                        type='submit'>
                        BUAT AKUN
                    </button>
                </form>
            </div>
        </div>
    )
}