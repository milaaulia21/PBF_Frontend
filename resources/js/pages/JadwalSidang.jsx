import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";

export default function JadwalSidang() {
    const context = useContext(DataContext)
    const { dataSidang, dataMahasiswa, dataRuangan } = context
    console.log(dataMahasiswa)
    console.log(dataSidang)

    return (
        <>
            <MainLayout>
                <div className="min-h-[90vh] min-w-full flex flex-col items-center gap-6">
                    <h1 className="text-2xl font-semibold mt-4 mb-610">Jadwal Sidang</h1>
                    <table className="border w-[70%]">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
                                <th className="p-4 border w-12 text-center">No</th>
                                <th className="p-4 border w-fit text-center">Nama Mahasiswa</th>
                                <th className="p-4 border w-fit text-center">Nama Ruangan</th>
                                <th className="p-4 border w-fit text-center">Tanggal Sidang</th>
                                <th className="p-4 border w-fit text-center">Waktu Mulai</th>
                                <th className="p-4 border w-fit text-center">Waktu Selesai</th>
                                <th className="p-4 border w-fit text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSidang.map((sidang, index) => (
                                <tr key={index}>
                                    <td className="p-4 border text-center">{index + 1}</td>
                                    <td className="p-4 border text-center">{dataMahasiswa.find(item => item.id_mhs === sidang.id_mhs) ? dataMahasiswa.find(item => item.id_mhs === sidang.id_mhs).nama_mhs : 'Nama Tidak ditemukan'}</td>
                                    <td className="p-4 border text-center">{dataRuangan.find(item => item.id_ruangan === sidang.id_ruangan) ? dataRuangan.find(item => item.id_ruangan === sidang.id_ruangan).nama_ruangan : 'Ruangan Tidak ditemukan'}</td>
                                    <td className="p-4 border text-center">{sidang.tanggal_sidang}</td>
                                    <td className="p-4 border text-center">{sidang.waktu_mulai}</td>
                                    <td className="p-4 border text-center">{sidang.waktu_selesai}</td>
                                    <td className="p-4 border text-center">{sidang.status}</td>
                                    {console.log(sidang)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}