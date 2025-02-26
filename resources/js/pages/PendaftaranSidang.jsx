import { useForm } from "react-hook-form";
import MainLayout from "../components/MainLayout";
import Data from '../lib/Data'

export default function PendaftaranSidang() {
    const { dataMahasiswa, dataRuangan, dataDosen } = Data
    const { register, handleSubmit, reset} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <>
            <MainLayout>
                <div className="min-w-full min-h-full flex flex-col items-center">
                    <h1 className="text-2xl font-semibold mt-4 mb-10">Form Pendaftaran</h1>
                   
                    <form id="student-input" onSubmit={handleSubmit(onSubmit)} action="" className="border w-[70%] flex flex-col gap-4 p-5 rounded-md">
                        
                        <label htmlFor="nama" className="font-semibold">Masukkan Nama</label>
                        <select name="nama" id="nama" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register("name", { required: 'Nama wajib di isi!!' })}>
                            {dataMahasiswa.map((mhs, index) => (
                                <option key={index} value={mhs.nama_mhs} className="bg-slate-100 border-none rounded-none">{mhs.nama_mhs}</option>
                            ))}
                        </select>
                        
                        <label htmlFor="ruangan" className="font-semibold">Pilih Ruangan</label>
                        <select name="ruangan" id="ruangan" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register('ruangan', { required: 'Ruangan harus diisi' })}>
                            {dataRuangan.map((r, index) => (
                                <option key={index} value={r.nama_ruangan} className="bg-slate-100 border-none rounded-none">{r.nama_ruangan}</option>
                            ))}
                        </select>
                        
                        <label htmlFor="date" className="font-semibold">Pilih Tanggal Sidang</label>
                        <input type="date" id="date" className="p-2 bg-slate-100 rounded-md mb-4" { ...register('date', { required: 'Tanggal harus di isi'})}/>
                        
                        <label htmlFor="time" className="font-semibold">Pilih Waktu Mulai</label>
                        <input type="time" id="time" className="p-2 bg-slate-100 rounded-md mb-4" {...register('time', { required: 'Waktu harus di isi'})}/>
                        
                        <button type="submit" className="bg-slate-800 self-center py-2 px-5 text-white rounded-md hover:opacity-75 hover:scale-105 transition-all duration-150 ease-in-out">Submit</button>
                    </form>

                    <form id="lecturer-selection" action="" className="border w-[70%] flex flex-col gap-4 p-5 rounded-md mt-5">
                        <label htmlFor="dosen" className="font-semibold">Pilih Dosen Penguji</label>
                        <select name="dosen" id="dosen" className="w-full p-2 rounded-md bg-slate-100 mb-4" required>
                            {dataDosen.map((dosen, index) => (
                                <option key={index} value={dosen.nama_dosen} className="bg-slate-100 border-none rounded-none">{dosen.nama_dosen}</option>
                            ))}
                        </select>
                        <select name="dosen" id="dosen" className="w-full p-2 rounded-md bg-slate-100 mb-4" required>
                            {dataDosen.map((dosen, index) => (
                                <option key={index} value={dosen.nama_dosen} className="bg-slate-100 border-none rounded-none">{dosen.nama_dosen}</option>
                            ))}
                        </select>
                        <button type="submit" className="bg-slate-800 self-center py-2 px-5 text-white rounded-md hover:opacity-75 hover:scale-105 transition-all duration-150 ease-in-out">Daftar</button>
                    </form>
                </div>
            </MainLayout>
        </>
    )
}