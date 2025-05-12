import { useState, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function TambahRuangan(){
    const { fetchData } = useContext(DataContext)
    const [kodeRuangan, setKodeRuangan] = useState('')
    const [ruangan, setRuangan] = useState('')
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch('http://localhost:8080/ruangan',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    kode_ruangan: kodeRuangan,
                    nama_ruangan: ruangan,
                })
            })

            fetchData()
            const result = await response.json()
            MySwal.fire('Success', result.message, "success")

            navigate('/list-ruangan')
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
                        <button className="bg-slate-700 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Tambah Ruangan</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}