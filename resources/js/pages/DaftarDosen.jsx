import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from '../api/dosenApi';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function DaftarDosen() {
    const { dataDosen, fetchData } = useContext(DataContext);
    const navigate = useNavigate();
    const { profile } = useAuth()
    const MySwal = withReactContent(Swal)

    if (!profile) {
        return <h1>Loading...</h1>
    }

    const handleDeleteWrapper = async (id) => {
        try {
            const res = await handleDelete(id);
            fetchData();
            MySwal.fire('Success', res.message, "success");
        } catch (e) {
            console.error(e);
        }
    };

    const handleEditWrapper = (idState, namaState, nipState) => {
        navigate('/edit-dosen', {
            state: { idState, namaState, nipState }
        });
    };

    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center px-4">
                <h2 className="text-2xl font-semibold my-8 mb-10">Daftar Dosen</h2>
                <div className="w-full max-w-4xl overflow-x-auto">
                    <table className="w-full border border-collapse text-center">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-3 border w-12">No</th>
                                <th className="p-3 border">Nama Dosen</th>
                                <th className="p-3 border">NIP</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Edit</th>
                                <th className={`p-3 border ${profile.isAdmin === 'Y' ? '' : 'hidden'}`}>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDosen.length > 0 ? (
                                dataDosen.map((dosen, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="p-3 border">{index + 1}</td>
                                        <td className="p-3 border text-left">{dosen.nama_dosen}</td>
                                        <td className="p-3 border">{dosen.nip}</td>
                                        <DeleteEditRow
                                            onDelete={() => handleDeleteWrapper(dosen.id_dosen)}
                                            onEdit={() => handleEditWrapper(dosen.id_dosen, dosen.nama_dosen, dosen.nip)}
                                            isAdmin={profile.isAdmin}
                                        />
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-500">
                                        Tidak ada data dosen tersedia.
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
