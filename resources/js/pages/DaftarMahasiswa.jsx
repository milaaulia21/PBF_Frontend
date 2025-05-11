import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from "../api/mahasiswaApi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../lib/AuthContext";

export default function DaftarMahasiswa() {
    const { dataMahasiswa, fetchData } = useContext(DataContext);
    const { profile } = useAuth()

    if (!profile) {
        return <h1>Loading...</h1>
    }

    const navigate = useNavigate();

    const handleDeleteWrapper = async (id) => {
        try {
            await handleDelete(id);
            fetchData();
        } catch (e) {
            console.error(e);
        }
    };

    const handleEditWrapper = (id) => {
        navigate('/edit-mahasiswa', {
            state: { id }
        });
    };

    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center px-4">
                <h2 className="text-2xl font-semibold my-8 mb-10">Daftar Mahasiswa</h2>
                <div className="w-full max-w-7xl overflow-x-auto">
                    <table className="w-full border border-collapse text-center">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-3 border w-12">No</th>
                                <th className="p-3 border">Nama Mahasiswa</th>
                                <th className="p-3 border">NIM</th>
                                <th className="p-3 border">Program Studi</th>
                                <th className="p-3 border">Tahun Akademik</th>
                                <th className="p-3 border">Judul Skripsi</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Edit</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMahasiswa.length > 0 ? (
                                dataMahasiswa.map((mahasiswa, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="p-3 border">{index + 1}</td>
                                        <td className="p-3 border text-left">{mahasiswa.nama_mhs}</td>
                                        <td className="p-3 border text-left">{mahasiswa.nim}</td>
                                        <td className="p-3 border text-left">{mahasiswa.prodi_mhs}</td>
                                        <td className="p-3 border text-left">{mahasiswa.thn_akademik}</td>
                                        <td className="p-3 border text-left">{mahasiswa.judul_skripsi}</td>
                                        <DeleteEditRow
                                            onDelete={() => handleDeleteWrapper(mahasiswa.id_mhs)}
                                            onEdit={() => handleEditWrapper(mahasiswa.id_mhs)}
                                            isAdmin={profile.isAdmin}
                                        />
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="p-4 text-center text-gray-500">
                                        Tidak ada data mahasiswa tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}
