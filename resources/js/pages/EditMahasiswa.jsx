import { useState, useEffect, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"
import { handleEdit } from "../api/mahasiswaApi"
import { useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function EditMahasiswa(){
    const location = useLocation()
    const navigate = useNavigate()
    const { fetchData } = useContext(DataContext)
    const {  idState, namaState, nimState, prodiState, tahunAkademikState, judulSkripsiState  } = location.state || {}
    const MySwal = withReactContent(Swal)

    useEffect(()=> {
        if(!location.state){
            navigate('/list-mahasiswa')
        }
    },[location, navigate])

    if (!location.state) return null;
    
    const [nama, setNama] = useState(namaState)
    const [nim, setNim] = useState(nimState)
    const [prodi, setProdi] = useState(prodiState)
    const [tahunAkademik, setTahunAkademik] = useState(tahunAkademikState)
    const [judulSkripsi, setJudulSkripsi] = useState(judulSkripsiState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await handleEdit(idState, nama, nim, prodi, tahunAkademik, judulSkripsi)
            MySwal.fire("Success", res.message, "success")
            fetchData()
            navigate('/list-mahasiswa')

        }catch(e){
            console.error("Gagal Mengirim Data :", e)
        }
    }
    
    return (
        <>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold my-8 mb-10">Edit Mahasiswa</h2>
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
                        <button className="bg-slate-800 self-center text-white py-2 px-7 rounded-full hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Edit</button>
                    </form>
                </div>
        </>
    )
}