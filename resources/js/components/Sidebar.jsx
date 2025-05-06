import Menus from './Menus'
import { FaChalkboardTeacher, FaClipboardList, FaHome, FaPlus } from 'react-icons/fa'
import { PiStudentDuotone } from 'react-icons/pi'
import { RiSchoolLine } from 'react-icons/ri'
import { FaCalendarDay } from "react-icons/fa"
import { FaGear } from 'react-icons/fa6'
import { CiClock2, CiGlobe, CiLogout } from 'react-icons/ci'
import { IoIosInformationCircle } from 'react-icons/io'
import { handleLogout } from '../api/authApi'

export default function Sidebar(props) {
    return (
        <aside className="flex flex-col h-screen w-[18dvw] bg-slate-900 overflow-y-auto">
            <div className=" flex flex-col p-5 border-b border-slate-700 gap-2">
                <h1 className="text-xl text-white font-bold">MySidang.com</h1>
                <p className="text-slate-400 text-sm mt-1">Hi {props.username}! 👋</p>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col border-b border-slate-700 py-2'>
                    <Menus name='Home' navigate='landing-page' icon={<FaHome />} />
                    <Menus name='Jadwal Sidang' navigate='jadwal-sidang' icon={<FaCalendarDay />} />
                </div>

                <h3 className='ms-5 text-xs font-semibold text-slate-100 mt-3 mb-2 w-fit flex justify-center items-center gap-5'>
                    <span><FaChalkboardTeacher /></span>
                    <span>DOSEN</span>
                </h3>

                <div className='flex flex-col border-b border-slate-700 pb-3'>
                    <Menus name='List Dosen' navigate='list-dosen' icon={<FaClipboardList />} />
                </div>

                <h3 className='ms-5 text-xs font-semibold text-slate-100 mt-3 mb-2 w-fit flex justify-center items-center gap-5'>
                    <span><PiStudentDuotone /></span>
                    <span>MAHASISWA</span>
                </h3>

                <div className='flex flex-col border-b border-slate-700 pb-3'>
                    <Menus name='List Mahasiswa' navigate='list-mahasiswa' icon={<FaClipboardList />} />
                </div>

                <h3 className='ms-5 text-xs font-semibold text-slate-100 mt-3 mb-2 w-fit flex justify-center items-center gap-5'>
                    <span><RiSchoolLine /></span>
                    <span>RUANGAN</span>
                </h3>

                <div className='flex flex-col border-b border-slate-700 pb-3'>
                    <Menus name='List Ruangan' navigate='list-ruangan' icon={<FaClipboardList />} />
                    <Menus name='Tambah Ruangan' navigate='tambah-ruangan' icon={<FaPlus />} />
                </div>
            </div>

            <div className='flex flex-col mt-auto ms-5 mb-5'>
                <h3 className='text-xs font-semibold text-slate-100 mt-20 flex items-center justify-center w-fit gap-5 mb-5'>
                    <span><FaGear /></span>
                    <span>SYSTEM</span>
                </h3>

                <p className='text-xs text-slate-100 w-fit flex justify-center items-center ms-5 gap-5'>
                    <span><CiGlobe /></span>
                    <span>Indonesia</span>
                </p>

                <p className='text-xs text-slate-100 w-fit flex justify-center items-center ms-5 mt-2 gap-5'>
                    <span><IoIosInformationCircle /></span>
                    <span>v.1.0.0</span>
                </p>

                <p className='text-xs text-slate-100 w-fit flex justify-center items-center ms-5 mt-2 gap-5'>
                    <span><CiClock2 /></span>
                    <span>Asia/Jakarta</span>
                </p>

                <button 
                    className='text-red-600 w-fit flex gap-5 items-center justify-center self-end hover:bg-slate-800 hover:scale-105 py-2 px-3 me-2 rounded transition-all duration-150 ease-in-out'
                    onClick={() => handleLogout()}
                >
                    <span className='text-xs'><CiLogout /></span>
                    <span className='text-xs'>Logout</span>
                </button>
            </div>

        </aside>
    )
}