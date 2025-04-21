import { useState, useEffect, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"
import { useNavigate, useLocation } from "react-router-dom"
import { handleEdit } from "../api/dosenApi"


export default function EditDosen(){
    const { fetchData } = useContext(DataContext)
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = location.state || {}

    useEffect(()=> {
        if(!location.state){
            navigate('/daftar-dosen')
        }
    },[location, navigate])

    if (!location.state) return null;

    const [nama, setNama] = useState('')
    const [nip, setNip] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await handleEdit(id, nama, nip)
            fetchData()
            navigate('/daftar-dosen')

        }catch(e){
            console.error("Gagal Mengirim Data :", e)
        }
    }

    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold my-8 mb-10">Edit Dosen</h2>
                    <form className="w-[70%] flex flex-col gap-7 border p-5 rounded-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="nama_dosen" className="mb-2 font-semibold">Nama Dosen</label>
                            <input type="text" id="nama_dosen" placeholder="Masukkan Nama" name="nama_dosen" value={nama} onChange={(e) => setNama(e.target.value)} className="p-2 bg-slate-100 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nip" className="mb-2 font-semibold">NIP</label>
                            <input type="number" id="nip" name="nip" placeholder="Masukkan Nomor Induk Pendidik" className="p-2 bg-slate-100 rounded-md" value={nip} onChange={(e) => setNip(e.target.value)}/>
                        </div>
                        <button className="bg-slate-800 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Konfirmasi</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}