import React, { useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { handleEdit } from '../api/mahasiswaApi'

const MahasiswaProfile = (props) => {
    const profile = props.profile
    const [name, setName] = useState(profile.nama_mhs)
    const [nim, setNIM] = useState(profile.nim)
    const [judulSkripsi, setJudulSkripsi] = useState(profile.judul_skripsi)
    const [prodi, setProdi] = useState(profile.prodi_mhs)
    const [tahunAkademik, setTahunAkademik] = useState(profile.thn_akademik)

    const handleSubmitWrapper = async (e) => {
        e.preventDefault()
        try{
            const res = await handleEdit(profile.id_mhs, name, nim, prodi, tahunAkademik, judulSkripsi)
            window.location.reload()
        }catch(e){
            console.error('Gagal Mengedit Data :', e)
        }
    }

    return (
        <div className='text-slate-950 w-[80%] mt-5 bg-slate-200 rounded-md p-5 relative'>
            {
                props.isEdit ? (
                    <form className='flex flex-col' onSubmit={handleSubmitWrapper}>
                        <label className='font-semibold' htmlFor="name">Nama</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

                        <label className='font-semibold' htmlFor="nim">NIM</label>
                        <input type="text" inputMode='numeric' value={nim} onChange={(e) => setNIM(e.target.value)} id="nim" name="nim" className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

                        <label className='font-semibold' htmlFor="judulSkripsi">Judul Skripsi</label>
                        <input type="text" id="judulSkripsi" value={judulSkripsi} onChange={(e) => setJudulSkripsi(e.target.value)} name="judulSkripsi" className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

                        <label className='font-semibold' htmlFor="prodi">Prodi</label>
                        <input type="text" id="prodi" name="prodi" value={prodi} onChange={(e) => setProdi(e.target.value)} className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

                        <label className='font-semibold' htmlFor="tahunAkademik">Tahun Akademik</label>
                        <input type="text" id="tahunAkademik" value={tahunAkademik} onChange={(e) => setTahunAkademik(e.target.value)} name="tahunAkademik" className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

                        <button type='submit' className='bg-slate-900 self-end px-7 py-2 rounded-full text-white'>Edit</button>
                    </form>
                ) : (
                    <>
                        <div onClick={() => props.onEdit()} className='absolute right-5 top-5 text-sm flex gap-2 items-center hover:scale-105 hover:font-semibold transition-all ease-in-out duration-150 cursor-pointer'>
                            <MdOutlineModeEdit />
                            <p>Edit Profil</p>
                        </div>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <p className='font-semibold'>Name </p>
                                <p>{name}</p>
                            </li>
                            <li>
                                <p className='font-semibold'>NIM </p>
                                <p>{nim}</p>
                            </li>
                            <li>
                                <p className='font-semibold'>Judul Skripsi </p>
                                <p>{judulSkripsi}</p>
                            </li>
                            <li>
                                <p className='font-semibold'>Prodi</p>
                                <p>{prodi}</p>
                            </li>
                            <li>
                                <p className='font-semibold'>Tahun Akademik</p>
                                <p>{tahunAkademik}</p>
                            </li>
                        </ul>
                    </>
                )
            }

        </div>
    )
}

export default MahasiswaProfile
