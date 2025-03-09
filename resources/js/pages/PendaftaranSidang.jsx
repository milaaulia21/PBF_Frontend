import { React, useState, useContext } from "react";
import { DataContext } from "../lib/DataContext";
import { useForm } from "react-hook-form";
import MainLayout from "../components/MainLayout";

export default function PendaftaranSidang() {
    const dataContext = useContext(DataContext)
    const { dataMahasiswa, dataRuangan, dataDosen } = dataContext
    const { register, handleSubmit, reset} = useForm()
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    const onSubmit = (data) => {
        setIsSubmitted(true)
        console.log(data)
        reset()
    }

    return (
        <>
            <MainLayout>
                <div className="min-w-full min-h-full flex flex-col items-center">
                    <h1 className="text-2xl font-semibold mt-4 mb-10">Form Pendaftaran</h1>
                   
                    <form id="student-input" onSubmit={handleSubmit(onSubmit)} action="" className={"border w-[70%] flex flex-col gap-4 p-5 rounded-md"}>
                        
                        <label htmlFor="nama" className="font-semibold">Masukkan Nama</label>
                        <select name="nama" id="nama" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register("name", { required: 'Nama wajib di isi!!' })}>
                            {dataMahasiswa.map((mhs, index) => (
                                <option key={index} value={mhs.nama_mhs} className="bg-slate-100 border-none rounded-none">{mhs.nama_mhs}</option>
                            ))}
                        </select>
                        
                        <label htmlFor="ruangan" className="font-semibold">Pilih Ruangan</label>
                        <select name="ruangan" id="ruangan" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register('ruangan', { required: 'Ruangan harus diisi!!' })}>
                            {dataRuangan.map((r, index) => (
                                <option key={index} value={r.nama_ruangan} className="bg-slate-100 border-none rounded-none">{r.nama_ruangan}</option>
                            ))}
                        </select>
                        
                        <button className="bg-slate-800 self-center py-2 px-5 text-white rounded-md hover:opacity-75 hover:scale-105 transition-all duration-150 ease-in-out">Submit</button>
                    </form>

                    <form id="lecturer-selection" action="" className={isSubmitted ? "flex border w-[70%]  flex-col gap-4 p-5 rounded-md mt-5" : 'hidden' } onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="dosen" className="font-semibold">Pilih Dosen Penguji</label>
                        <select name="dosen" id="dosen" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register('dosen1', { required: 'Dosen 1 harus di isi!!'})}>
                            {dataDosen.map((dosen, index) => (
                                <option key={index} value={dosen.nama_dosen} className="bg-slate-100 border-none rounded-none">{dosen.nama_dosen}</option>
                            ))}
                        </select>
                        <select name="dosen" id="dosen" className="w-full p-2 rounded-md bg-slate-100 mb-4" {...register('dosen2', { required: 'Dosen 2 harus di isi!!'})}>
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