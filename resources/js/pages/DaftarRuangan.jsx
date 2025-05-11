import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from "../api/ruanganApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";

export default function DaftarRuangan() {
    const { dataRuangan, fetchData } = useContext(DataContext);
    const navigate = useNavigate();
    const { profile } = useAuth()

    if (!profile) {
        return <h1>Loading...</h1>
    }

    const handleDeleteWrapper = async (id) => {
        try {
            await handleDelete(id);
            fetchData();
        } catch (e) {
            console.error(e);
        }
    };

    const handleEditWrapper = (id) => {
        navigate('/edit-ruangan', {
            state: { id }
        });
    };

    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center px-4">
                <h2 className="text-2xl font-semibold my-8 mb-10">Daftar Ruangan</h2>
                <div className="w-full max-w-4xl overflow-x-auto">
                    <table className="w-full border border-collapse text-center">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-3 border w-12">No</th>
                                <th className="p-3 border">Kode Ruangan</th>
                                <th className="p-3 border">Nama Ruangan</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Edit</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataRuangan.length > 0 ? (
                                dataRuangan.map((ruangan, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="p-3 border">{index + 1}</td>
                                        <td className="p-3 border">{ruangan.kode_ruangan}</td>
                                        <td className="p-3 border text-left">{ruangan.nama_ruangan}</td>
                                        <DeleteEditRow
                                            onDelete={() => handleDeleteWrapper(ruangan.id_ruangan)}
                                            onEdit={() => handleEditWrapper(ruangan.id_ruangan)}
                                            isAdmin={profile.isAdmin}
                                        />
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-500">
                                        Tidak ada data ruangan tersedia.
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
