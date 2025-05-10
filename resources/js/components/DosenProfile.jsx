import React, { useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { handleEdit } from '../api/dosenApi'

const DosenProfile = (props) => {
    const profile = props.profile
    const [name, setName] = useState(profile.nama_dosen)
    const [nip, setNIP] = useState(profile.nip)

    const handleSubmitWrapper = async (e) => {
        e.preventDefault()
        try{
            const res = await handleEdit(profile.id_dosen, name, nip)
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

                        <label className='font-semibold' htmlFor="nip">NIP</label>
                        <input type="text" inputMode='numeric' value={nip} onChange={(e) => setNIP(e.target.value)} id="nip" name="nip" className='w-full h-10 rounded-md mt-2 mb-4 px-2 focus:outline-slate-600' />

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
                                <p className='font-semibold'>Nama </p>
                                <p>{name}</p>
                            </li>
                            <li>
                                <p className='font-semibold'>NIP </p>
                                <p>{nip}</p>
                            </li>

                        </ul>
                    </>
                )
            }
        </div>
    )
}

export default DosenProfile
