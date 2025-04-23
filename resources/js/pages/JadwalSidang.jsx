import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import { GoPlus } from "react-icons/go";

export default function JadwalSidang() {
    const context = useContext(DataContext)
    const { dataSidang, dataMahasiswa, dataRuangan } = context
    console.log(dataMahasiswa)
    console.log(dataSidang)

    return (
        <>
            <MainLayout>
                <div className="min-h-[90vh] min-w-full flex flex-col items-center gap-6">
                    <h1 className="text-2xl font-semibold my-8">Jadwal Sidang</h1>
                    <div className="max-h-[60dvh]">
                        <button className="bg-slate-800 text-white py-3 pr-9 pl-6 rounded-full hover:scale-105 hover:opacity-80 transition-all duration-150 ease-in-out self-end mb-5 flex gap-2 justify-center items-center"><GoPlus/> Daftar</button>
                        <table className="w-full relative">
                            <thead className="sticky top-0">
                                <tr className="border bg-slate-800 text-white">
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}