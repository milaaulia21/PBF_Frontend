import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import JadwalSidang from '../pages/JadwalSidang'
import DaftarDosen from '../pages/DaftarDosen'
import DaftarMahasiswa from '../pages/DaftarMahasiswa'
import DaftarRuangan from '../pages/DaftarRuangan'
import TambahRuangan from '../pages/TambahRuangan'
import Register from '../pages/Register'
import EditMahasiswa from '../pages/EditMahasiswa'
import EditRuangan from '../pages/EditRuangan'
import EditDosen from '../pages/EditDosen'
import DosenRegister from '../pages/DosenRegister'
import MahasiswaRegister from '../pages/MahasiswaRegister'
import Profile from '../pages/Profile'
import MainLayout from '../components/MainLayout'

export default function Router() {
    return (

        <MainLayout>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/register/dosen-register' element={<DosenRegister />} />
                    <Route path='/register/mahasiswa-register' element={<MahasiswaRegister />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path="/landing-page" element={<LandingPage />} />
                    <Route path="/jadwal-sidang" element={<JadwalSidang />} />
                    <Route path="/list-dosen" element={<DaftarDosen />} />
                    <Route path="/list-mahasiswa" element={<DaftarMahasiswa />} />
                    <Route path="/list-ruangan" element={<DaftarRuangan />} />
                    <Route path="/tambah-ruangan" element={<TambahRuangan />} />
                    <Route path="/edit-mahasiswa" element={<EditMahasiswa />} />
                    <Route path="/edit-ruangan" element={<EditRuangan />} />
                    <Route path="/edit-dosen" element={<EditDosen />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </MainLayout>

    )
}
