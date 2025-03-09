import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";

export default function DaftarMahasiswa() {

    const dataContext = useContext(DataContext)
    const { fetchData, dataMahasiswa } = dataContext

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/mahasiswa/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': "application/json",
                }
            })

            if (!response.ok) {
                throw new Error('Gak betul ini bang deletenya')
            }

            fetchData()
            const result = await response.json()
            console.log(result)
        }catch(e){
            console.error('Gagal Menghapus Data :', e)
        }
    }
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Mahasiswa</h2>
                    <table className="border mb-10">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
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
                                    <DeleteEditRow onDelete={() => handleDelete(mahasiswa.id_mhs)} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}