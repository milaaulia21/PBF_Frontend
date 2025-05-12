import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../lib/AuthContext";
import Loading from "./Loading";

export default function MainLayout({children}){
    const { profile } = useAuth()
    const role = localStorage.getItem('role')

    if (!profile) {
        return <Loading />
    }

    return(
        <div className="w-screen h-screen flex">
            <Sidebar username={role === "mahasiswa" ? profile.nama_mhs : profile.nama_dosen}/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar 
                    username={role === "mahasiswa" ? profile.nama_mhs : profile.nama_dosen}
                    role={role}
                    roleId={role=== "mahasiswa" ? profile.nim : profile.nip}
                    isAdmin={profile.isAdmin}
                    />
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}