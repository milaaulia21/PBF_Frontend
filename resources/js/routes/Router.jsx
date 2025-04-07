import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ProtectedRoute from '../components/ProtectedRoute'
import Login from '../pages/Login'
import PendaftaranSidang from '../pages/PendaftaranSidang'
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
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/landing-page" element={<LandingPage />} />
                    <Route path="/pendaftaran-sidang" element={<PendaftaranSidang />} />
                    <Route path="/jadwal-sidang" element={<JadwalSidang />} />
                    <Route path="/daftar-dosen" element={<DaftarDosen />} />
                    <Route path="/daftar-mahasiswa" element={<DaftarMahasiswa />} />
                    <Route path="/daftar-ruangan" element={<DaftarRuangan />} />
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