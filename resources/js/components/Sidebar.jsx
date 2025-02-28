import Menus from './Menus'
import { FaHome, FaPlus } from 'react-icons/fa'
import { PiStudentDuotone } from 'react-icons/pi'
import { GiTeacher } from 'react-icons/gi'
import { RiSchoolLine } from 'react-icons/ri'
import { IoTimeOutline } from 'react-icons/io5'

export default function Sidebar() {
    return (
        <aside className="flex flex-col min-h-full w-[18dvw] bg-slate-700">
            <h1 className=" w-fit p-5 font-semibold text-xl text-white">MySidang.com</h1>

            <h3 className='ms-5 text-sm font-bold text-slate-800 mb-5 mt-3'>Pages</h3>
            <div className='flex flex-col gap-4'>
                <Menus name='Home' icon={<FaHome />} />
                <Menus name='Jadwal Sidang' navigate='jadwal-sidang' icon={<IoTimeOutline />} />
            </div>
            <h3 className='ms-5 text-sm font-bold text-slate-800 m-5'>List</h3>
            <div className='flex flex-col gap-4'>
                <Menus name='Daftar Mahasiswa' navigate='daftar-mahasiswa' icon={<PiStudentDuotone />} />
                <Menus name='Daftar Dosen' navigate='daftar-dosen' icon={<GiTeacher />} />
                <Menus name='Daftar Ruangan' navigate='daftar-ruangan' icon={<RiSchoolLine />} />
            </div>
            <h3 className='ms-5 text-sm font-bold text-slate-800 m-5'>Add</h3>
            <div className='flex flex-col gap-4'>
                <Menus name='Pendaftaran Sidang' navigate='pendaftaran-sidang' icon={<FaPlus />} />
                <Menus name='Tambah Mahasiswa' navigate='tambah-mahasiswa' icon={<FaPlus />} />
                <Menus name='Tambah Ruangan' navigate='tambah-ruangan' icon={<FaPlus />} />
                <Menus name='Tambah Dosen' navigate='tambah-dosen' icon={<FaPlus />} />
            </div>
        </aside>
    )
}