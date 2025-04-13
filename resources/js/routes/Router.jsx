import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import JadwalSidang from '../pages/JadwalSidang'
import DaftarDosen from '../pages/DaftarDosen'
import DaftarMahasiswa from '../pages/DaftarMahasiswa'
import DaftarRuangan from '../pages/DaftarRuangan'
import TambahMahasiswa from '../pages/TambahMahasiswa'
import TambahRuangan from '../pages/TambahRuangan'
import TambahDosen from '../pages/TambahDosen'
import Register from '../pages/Register'
import EditMahasiswa from '../pages/EditMahasiswa'
import EditRuangan from '../pages/EditRuangan'
import EditDosen from '../pages/EditDosen'

export default function Router() {
    return (
        <>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/landing-page" element={<LandingPage />} />
                    <Route path="/jadwal-sidang" element={<JadwalSidang />} />
                    <Route path="/list-dosen" element={<DaftarDosen />} />
                    <Route path="/list-mahasiswa" element={<DaftarMahasiswa />} />
                    <Route path="/list-ruangan" element={<DaftarRuangan />} />
                    <Route path="/tambah-mahasiswa" element={<TambahMahasiswa />} />
                    <Route path="/tambah-ruangan" element={<TambahRuangan />} />
                    <Route path="/tambah-dosen" element={<TambahDosen />} />
                    <Route path="/edit-mahasiswa" element={<EditMahasiswa />} />
                    <Route path="/edit-ruangan" element={<EditRuangan />} />
                    <Route path="/edit-dosen" element={<EditDosen />} />
                </Route>
            </Routes>
        </>
    )
}