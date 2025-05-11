import MainLayout from "../components/MainLayout";
import { useContext, useState } from "react";
import { DataContext } from "../lib/DataContext";
import { GoPlus } from "react-icons/go";
import { useAuth } from "../lib/AuthContext";
import { handleDaftarSidang, updateStatusSidang } from "../api/sidangApi";
import { FaCheck } from "react-icons/fa";

export default function JadwalSidang() {
    const { dataSidang, dataMahasiswa, dataRuangan, fetchData } = useContext(DataContext);
    const { profile } = useAuth();
    const [statusSidang, setStatusSidang] = useState(dataSidang.status)

    if (!profile) {
        return <h1>Loading</h1>
    }

    const role = localStorage.getItem('role')
    const isMahasiswa = role === "mahasiswa"

    const handleDaftarSidangWrapper = async () => {
        try {
            const res = await handleDaftarSidang(profile)
            console.log(res)
            fetchData()
        } catch (e) {
            console.error(e)
        }
    }

    const handleUpdateStatusWrapper = async (id) => {
        try {
            const res = await updateStatusSidang(id, statusSidang)
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainLayout>
            <div className="min-h-[90vh] w-full flex flex-col items-center gap-6 px-4">
                <div className="w-full max-w-6xl">
                    <div className="relative flex justify-center items-center my-8">
                        <h1 className="text-2xl font-semibold">Jadwal Sidang</h1>
                        <button
                            className={`absolute right-0 bg-slate-800 text-white py-2 px-4 rounded-full flex items-center gap-2 hover:scale-105 hover:opacity-80 transition-all ${!isMahasiswa && 'hidden'}`}
                            onClick={() => handleDaftarSidangWrapper()}
                        >
                            <GoPlus className="text-lg" /> Daftar
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-collapse text-center">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="p-3 border">No</th>
                                    <th className="p-3 border">Nama Mahasiswa</th>
                                    <th className="p-3 border">Nama Ruangan</th>
                                    <th className="p-3 border">Tanggal Sidang</th>
                                    <th className="p-3 border">Waktu Mulai</th>
                                    <th className="p-3 border">Waktu Selesai</th>
                                    <th className="p-3 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSidang.length > 0 ? (
                                    dataSidang.map((sidang, index) => {
                                        const mahasiswa = dataMahasiswa.find(item => item.id_mhs === sidang.id_mhs);
                                        const ruangan = dataRuangan.find(item => item.id_ruangan === sidang.id_ruangan);
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                <td className="p-3 border">{index + 1}</td>
                                                <td className="p-3 border">{mahasiswa ? mahasiswa.nama_mhs : 'Nama Tidak Ditemukan'}</td>
                                                <td className="p-3 border">{ruangan ? ruangan.nama_ruangan : 'Ruangan Tidak Ditemukan'}</td>
                                                <td className="p-3 border">{sidang.tanggal_sidang}</td>
                                                <td className="p-3 border">{sidang.waktu_mulai}</td>
                                                <td className="p-3 border">{sidang.waktu_selesai}</td>
                                                {
                                                    isMahasiswa ? (
                                                        <td className="p-3 border">{sidang.status}</td>
                                                    ) : (
                                                        <td className="p-3 border">
                                                            <form onSubmit={(e) => {
                                                                e.preventDefault()
                                                                handleUpdateStatusWrapper(sidang.id_sidang)
                                                            }}>
                                                                <select
                                                                    className="border border-gray-300 rounded p-2"
                                                                    value={statusSidang}
                                                                    onChange={(e) => {
                                                                        setStatusSidang(e.target.value)
                                                                    }}
                                                                >
                                                                    <option value="DITUNDA">DITUNDA</option>
                                                                    <option value="DIJADWALKAN">DJADWALKAN</option>
                                                                    <option value="DIBATALKAN">DIBATALKAN</option>
                                                                </select>
                                                                <button type="submit" className="ml-2 rounded-md border border-slate-900 p-2 hover:bg-slate-900 hover:text-white transition-all duration-150 ease-in-out">
                                                                    <FaCheck />
                                                                </button>
                                                            </form>
                                                        </td>
                                                    )
                                                }
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="p-4 text-center text-gray-500">
                                            Tidak ada data sidang tersedia.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
