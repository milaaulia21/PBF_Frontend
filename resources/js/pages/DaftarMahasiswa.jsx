import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";

export default function DaftarMahasiswa() {

    const dataContext = useContext(DataContext)
    const { dataMahasiswa } = dataContext

    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Mahasiswa</h2>
                    <table className="border">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
                                <th className="p-4 border">Nama Mahasiswa</th>
                                <th className="p-4 border">NIM</th>
                                <th className="p-4 border">Program Studi</th>
                                <th className="p-4 border">Tahun Akademik</th>
                                <th className="p-4 border">Judul Skripsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMahasiswa.map((mahasiswa, index) => (
                                <tr className="" key={index}>
                                    <td className="p-4 border" >{mahasiswa.nama_mhs}</td>
                                    <td className="p-4 border" >{mahasiswa.nim}</td>
                                    <td className="p-4 border" >{mahasiswa.prodi_mhs}</td>
                                    <td className="p-4 border" >{mahasiswa.thn_akademik}</td>
                                    <td className="p-4 border" >{mahasiswa.judul_skripsi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}