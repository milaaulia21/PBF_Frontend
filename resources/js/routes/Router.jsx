import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import PendaftaranSidang from '../pages/PendaftaranSidang'
import JadwalSidang from '../pages/JadwalSidang'
import DaftarDosen from '../pages/DaftarDosen'
import DaftarMahasiswa from '../pages/DaftarMahasiswa'
import DaftarRuangan from '../pages/DaftarRuangan'
import TambahMahasiswa from '../pages/TambahMahasiswa'

export default function Router(){
    return(
        <>
            <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/landingpage' element={<LandingPage/>}/>
                    <Route path='/pendaftaran-sidang' element={<PendaftaranSidang/>}/>
                    <Route path='/jadwal-sidang' element={<JadwalSidang/>}/>
                    <Route path='/daftar-dosen' element={<DaftarDosen/>}/>
                    <Route path='/daftar-mahasiswa' element={<DaftarMahasiswa/>}/>
                    <Route path='/daftar-ruangan' element={<DaftarRuangan/>}/>
                    <Route path='/tambah-mahasiswa' element={<TambahMahasiswa/>}/>
            </Routes>
        </>
    )
}