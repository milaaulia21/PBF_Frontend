import MainLayout from "../components/MainLayout"
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/pendaftaran-sidang')
    }


    return (
        <div className="flex min-h-screen">
            <MainLayout>
                <div className="min-h-full min-w-full flex items-center justify-center gap-16 ">
                    <div className="flex flex-col gap-7 justify-center items-center">
                        <h3 className="text-2xl drop-shadow-2xl">Selamat Datang di <span className="font-semibold">MySidang.com</span></h3>
                        <button className="bg-slate-600 text-white w-fit py-2 px-5 rounded shadow-md hover:scale-105 hover:opacity-80 transition-all ease-in duration-150" onClick={handleNavigate}>Daftar Sekarang</button>
                    </div>
                    <img src="../image/student.svg" alt="gambar mahasiswa" className="h-[40rem]"/>
                </div>
            </MainLayout>
        </div>
    )
}