import MainLayout from "../components/MainLayout"
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"

export default function LandingPage() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/jadwal-sidang')
    }


    return (
        <div className="flex min-h-screen">
            <MainLayout>
                <div className="w-full overflow-hidden min-h-fit">
                    <div className="min-h-[93vh] min-w-full flex items-center justify-center gap-16 ">
                        <img src="../image/student.svg" alt="gambar mahasiswa" className="h-[40rem]" />
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-2xl drop-shadow-2xl">Selamat Datang di <span className="font-semibold">MySidang.com</span></h3>
                            <p className="text-center text-slate-500 mb-10">Atur Sidang Tanpa Ribet!</p>
                            <button className="bg-slate-900 text-slate-100 w-fit py-2 px-5 rounded-full shadow-md hover:scale-105 hover:opacity-80 transition-all ease-in duration-150 flex gap-3 justify-center items-center" onClick={handleNavigate}>
                                <span>Atur Jadwal Sekarang!!</span>
                                <span><BsArrowRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}