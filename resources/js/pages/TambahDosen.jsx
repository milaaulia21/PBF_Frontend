import { useState, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"

export default function TambahDosen(){
    const { fetchData } = useContext(DataContext)
    const [nama, setNama] = useState('')
    const [nip, setNip] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch('http://localhost:8080/dosen',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama_dosen: nama,
                    nip: nip,
                })
            })
            
            fetchData()
            const result = await response.json()
            console.log("Response", result)

            setNama('')
            setNip('')
        }catch(e){
            console.error("Gagal Mengirim Data :", e)
        }

    }
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Tambah Dosen</h2>
                    <form className="w-[70%] flex flex-col gap-7 border p-5 rounded-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="nama_dosen" className="mb-2 font-semibold">Nama Dosen</label>
                            <input type="text" id="nama_dosen" placeholder="Masukkan Nama" name="nama_dosen" value={nama} onChange={(e) => setNama(e.target.value)} className="p-2 bg-slate-100 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nip" className="mb-2 font-semibold">NIP</label>
                            <input type="number" id="nip" name="nip" placeholder="Masukkan Nomor Induk Pendidik" className="p-2 bg-slate-100 rounded-md" value={nip} onChange={(e) => setNip(e.target.value)}/>
                        </div>
                        <button className="bg-slate-700 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Tambah Dosen</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}