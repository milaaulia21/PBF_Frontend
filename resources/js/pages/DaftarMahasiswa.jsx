import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from "../api/mahasiswaApi";
import { useNavigate } from 'react-router-dom';

export default function DaftarMahasiswa() {
    const dataContext = useContext(DataContext)
    const { fetchData, dataMahasiswa } = dataContext

    const handleDeleteWrapper = async(id) => {
        try {
            await handleDelete(id)
            fetchData()
        } catch (e) {
            console.error(e)
        }
    }

    const navigate = useNavigate()

    const handleNavigateToEditPage = (id) => {
        navigate('/edit-mahasiswa', {
            state: {
                id: id
            }
        })
    }
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold my-8 mb-10">Daftar Mahasiswa</h2>
                    <table className="border mb-10">
                        <thead>
                            <tr className="border bg-slate-800 text-white">
                                <th className="p-4 border">No</th>
                                <th className="p-4 border">Nama Mahasiswa</th>
                                <th className="p-4 border">NIM</th>
                                <th className="p-4 border">Program Studi</th>
                                <th className="p-4 border">Tahun Akademik</th>
                                <th className="p-4 border">Judul Skripsi</th>
                                <th className="p-4 border">Edit</th>
                                <th className="p-4 border">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMahasiswa.map((mahasiswa, index) => (
                                <tr className="" key={index}>
                                    <td className="p-4 border w-12 text-center" >{index + 1}</td>
                                    <td className="p-4 border" >{mahasiswa.nama_mhs}</td>
                                    <td className="p-4 border" >{mahasiswa.nim}</td>
                                    <td className="p-4 border" >{mahasiswa.prodi_mhs}</td>
                                    <td className="p-4 border" >{mahasiswa.thn_akademik}</td>
                                    <td className="p-4 border" >{mahasiswa.judul_skripsi}</td>
                                    <DeleteEditRow onDelete = {() => handleDeleteWrapper(mahasiswa.id_mhs)} onEdit = {() => handleNavigateToEditPage(mahasiswa.id_mhs)}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}