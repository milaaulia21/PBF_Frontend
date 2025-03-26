import { useState, useEffect, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"
import { handleEdit } from "../api/mahasiswaApi"
import { useNavigate, useLocation } from 'react-router-dom'

export default function EditMahasiswa(){
    const location = useLocation()
    const navigate = useNavigate()
    const dataContext = useContext(DataContext)
    const { fetchData } = dataContext

    const { id } = location.state || {}

    useEffect(()=> {
        if(!location.state){
            navigate('/daftar-mahasiswa')
        }
    },[location, navigate])

    if (!location.state) return null;
    
    const [nama, setNama] = useState('')
    const [nim, setNim] = useState('')
    const [prodi, setProdi] = useState('')
    const [tahunAkademik, setTahunAkademik] = useState('')
    const [judulSkripsi, setJudulSkripsi] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await handleEdit(id, nama, nim, prodi, tahunAkademik, judulSkripsi)
            fetchData()
            navigate('/daftar-mahasiswa')

        }catch(e){
            console.error("Gagal Mengirim Data :", e)
        }

    }
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Edit Mahasiswa</h2>
                    <form className="w-[70%] flex flex-col gap-7 border p-5 rounded-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="nama_mhs" className="mb-2 font-semibold">Nama Mahasiswa</label>
                            <input type="text" id="nama_mhs" placeholder="Masukkan Nama" name="nama_mhs" value={nama} onChange={(e) => setNama(e.target.value)} className="p-2 bg-slate-100 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nim" className="mb-2 font-semibold">NIM</label>
                            <input type="number" id="nim" name="nim" placeholder="Masukkan Nomor Induk Mahasiswa" className="p-2 bg-slate-100 rounded-md" value={nim} onChange={(e) => setNim(e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="prodi_mhs" className="mb-2 font-semibold">Program Studi</label>
                            <select name="prodi" id="prodi_mhs" className="p-2 rounded-md bg-slate-100" value={prodi} onChange={(e) => setProdi(e.target.value)}>
                                <option value="D3 TI">D-III Teknik Informatika</option>
                                <option value="D4 RPL">D-IV Rekayasa Perangkat Lunak</option>
                                <option value="D4 ALKS">D-IV Akutansi Lembaga Keuangan Syariah</option>
                                <option value="D4 RKS">D-IV Rekayasa Perangkat Lunak</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="thn_akademik" className="mb-2 font-semibold">Tahun Akademik</label>
                            <input type="year" id="thn_akademik" name="thn_akademik" placeholder="Masukkan Tahun Akademik" className="p-2 bg-slate-100 rounded-md" value={tahunAkademik} onChange={(e) => setTahunAkademik(e.target.value)}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="judul_skripsi" className="mb-2 font-semibold">Judul Skripsi</label>
                            <input type="year" id="judul_skripsi" name="judul_skripsi" placeholder="Masukkan Judul Skripsi" className="p-2 bg-slate-100 rounded-md" value={judulSkripsi} onChange={(e) => setJudulSkripsi(e.target.value)}/>
                        </div>
                        <button className="bg-slate-700 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Tambah Mahasiswa</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}