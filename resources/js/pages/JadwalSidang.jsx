import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";

export default function JadwalSidang() {
    
    const dataContext = useContext(DataContext)
    const { dataJadwal } = dataContext

    return (
        <>
            <MainLayout>
                <div className="min-h-[90vh] min-w-full flex flex-col items-center gap-6">
                    <h1 className="text-2xl font-semibold mt-4 mb-610">Jadwal Sidang</h1>
                    <table className="border w-[70%]">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
                                <th className="p-4 border w-12 text-center">No</th>
                                <th className="p-4 border w-1/4 text-center">Nama Mahasiswa</th>
                                <th className="p-4 border w-12 text-center">Nama Ruangan</th>
                                <th className="p-4 border w-12 text-center">Tanggal Sidang</th>
                                <th className="p-4 border w-12 text-center">Waktu Mulai</th>
                                <th className="p-4 border w-12 text-center">Waktu Selesai</th>
                                <th className="p-4 border w-12 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataJadwal.map((jadwal, index) => (
                                <tr key={index}>
                                    <td className="p-4 border text-center">{index + 1}</td>
                                    <td className="p-4 border text-center">{jadwal.nama_mahasiswa}</td>
                                    <td className="p-4 border text-center">{jadwal.nama_ruangan}</td>
                                    <td className="p-4 border text-center">{jadwal.tanggal_sidang}</td>
                                    <td className="p-4 border text-center">{jadwal.waktu_mulai}</td>
                                    <td className="p-4 border text-center">{jadwal.waktu_selesai}</td>
                                    <td className="p-4 border text-center">{jadwal.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}