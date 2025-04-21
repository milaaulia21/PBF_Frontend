import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from '../api/dosenApi';
import { useNavigate } from "react-router-dom"

export default function DaftarDosen() {
    const dataContext = useContext(DataContext);
    const { dataDosen, fetchData } = dataContext;
    const navigate = useNavigate()

    const handleDeleteWrapper = async(id) => {
        try {
            await handleDelete(id);
            fetchData();
        } catch (e) {
            console.error(e);
        }
    }

    const handleEditWrapper = (id) => {
        navigate('/edit-dosen', {
            state: {
                id: id
            }
        })
    }

    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold my-8 mb-10">Daftar Dosen</h2>
                    <table className="border w-[70%] mb-10">
                        <thead>
                            <tr className="border bg-slate-800 text-white rounded-md">
                                <th className="p-4 border w-12 text-center">No</th>
                                <th className="p-4 border w-1/2 text-center">Nama Dosen</th>
                                <th className="p-4 border w-1/2 text-center">NIP</th>
                                <th className="p-4 border w-1/2 text-center">Edit</th>
                                <th className="p-4 border w-1/2 text-center">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDosen.map((dosen, index) => (
                                <tr key={index}>
                                    <td className="p-4 border text-center">{index + 1}</td>
                                    <td className="p-4 border">{dosen.nama_dosen}</td>
                                    <td className="p-4 border">{dosen.nip}</td>
                                    <DeleteEditRow onDelete = {() => handleDeleteWrapper(dosen.id_dosen)} onEdit = {() => handleEditWrapper(dosen.id_dosen)}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}
