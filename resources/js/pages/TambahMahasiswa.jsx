import { useState, useContext } from "react"
import { DataContext } from "../lib/DataContext"
import MainLayout from "../components/MainLayout"

export default function TambahMahasiswa() {
    const { fetchData } = useContext(DataContext)
    const [nama, setNama] = useState('')
    const [nim, setNim] = useState('')
    const [prodi, setProdi] = useState('')
    const [tahunAkademik, setTahunAkademik] = useState('')
    const [judulSkripsi, setJudulSkripsi] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8080/mahasiswa', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama_mhs: nama,
                    nim: nim,
                    prodi_mhs: prodi,
                    thn_akademik: tahunAkademik,
                    judul_skripsi: judulSkripsi
                })
            })

            fetchData()
            const result = await response.json()
            console.log("Response", result)

            setNama('')
            setNim('')
            setProdi('')
            setTahunAkademik('')
            setJudulSkripsi('')
        } catch (e) {
            console.error("Gagal Mengirim Data :", e)
        }

    }
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Tambah Mahasiswa</h2>
                    <form className="w-[70%] flex flex-col gap-7 border p-5 rounded-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="nama_mhs" className="mb-2 font-semibold">Nama Mahasiswa</label>
                            <input type="text" id="nama_mhs" placeholder="Masukkan Nama" name="nama_mhs" value={nama} onChange={(e) => setNama(e.target.value)} className="p-2 bg-slate-100 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nim" className="mb-2 font-semibold">NIM</label>
                            <input type="number" id="nim" name="nim" placeholder="Masukkan Nomor Induk Mahasiswa" className="p-2 bg-slate-100 rounded-md" value={nim} onChange={(e) => setNim(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="prodi_mhs" className="mb-2 font-semibold">Program Studi</label>
                            <select
                                name="prodi"
                                id="prodi_mhs"
                                className="p-2 rounded-md bg-slate-100"
                                value={prodi}
                                onChange={(e) => setProdi(e.target.value)}
                                required
                            >
                                <option value="">Pilih Program Studi</option>
                                <option value="D3 TI">D-III Teknik Informatika</option>
                                <option value="D4 RPL">D-IV Rekayasa Perangkat Lunak</option>
                                <option value="D4 ALKS">D-IV Akutansi Lembaga Keuangan Syariah</option>
                                <option value="D4 RKS">D-IV Rekayasa Perangkat Lunak</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="thn_akademik" className="mb-2 font-semibold">Tahun Akademik</label>
                            <input type="year" id="thn_akademik" name="thn_akademik" placeholder="Masukkan Tahun Akademik" className="p-2 bg-slate-100 rounded-md" value={tahunAkademik} onChange={(e) => setTahunAkademik(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="judul_skripsi" className="mb-2 font-semibold">Judul Skripsi</label>
                            <input type="year" id="judul_skripsi" name="judul_skripsi" placeholder="Masukkan Judul Skripsi" className="p-2 bg-slate-100 rounded-md" value={judulSkripsi} onChange={(e) => setJudulSkripsi(e.target.value)} />
                        </div>
                        <button className="bg-slate-700 self-center text-white py-2 px-3 rounded-md hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out" type="submit">Tambah Mahasiswa</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}