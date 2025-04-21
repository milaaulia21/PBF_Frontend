import { useState, useEffect, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"
import { handleEdit } from "../api/ruanganApi"
import { useNavigate, useLocation } from 'react-router-dom'

export default function EditRuangan(){
    const location = useLocation()
    const navigate = useNavigate()
    const { fetchData } = useContext(DataContext)
    const { id } = location.state || {}

    useEffect(()=> {
        if(!location.state){
            navigate('/daftar-ruangan')
        }
    },[location, navigate])

    if (!location.state) return null;

    const [kodeRuangan, setKodeRuangan] = useState('')
    const [ruangan, setRuangan] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await handleEdit(id, kodeRuangan, ruangan)
            fetchData()
            navigate('/daftar-ruangan')

        }catch(e){
            console.error("Gagal Mengirim Data :", e)
        }
    }

    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold my-8 mb-10">Tambah Ruangan</h2>
                    <form className="w-[70%] flex flex-col gap-7 border p-5 rounded-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="nama_ruangan" className="mb-2 font-semibold">Nama Ruangan</label>
                            <input type="text" id="nama_ruangan" placeholder="Masukkan Nama Ruangan" name="nama_ruangan" value={ruangan} onChange={(e) => setRuangan(e.target.value)} className="p-2 bg-slate-100 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="kode_ruangan" className="mb-2 font-semibold">Kode Ruangan</label>
                            <input type="text" id="kode_ruangan" name="kode_ruangan" placeholder="Masukkan Kode Ruangan" className="p-2 bg-slate-100 rounded-md" value={kodeRuangan} onChange={(e) => setKodeRuangan(e.target.value)}/>
                        </div>
                        <button className="bg-slate-800 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Tambah Ruangan</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}