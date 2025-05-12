import MainLayout from "../components/MainLayout";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../lib/DataContext";
import { GoPlus } from "react-icons/go";
import { useAuth } from "../lib/AuthContext";
import { handleDaftarSidang, updateStatusSidang } from "../api/sidangApi";
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function JadwalSidang() {
    const { dataSidang, dataMahasiswa, dataRuangan, fetchData } = useContext(DataContext);
    const { profile } = useAuth();
    const [statusSidang, setStatusSidang] = useState({})
    const MySwal = withReactContent(Swal)
    
    useEffect(() => {
        const initialStatus = {};
        dataSidang.forEach(item => {
            initialStatus[item.id_sidang] = item.status;
        });
        setStatusSidang(initialStatus);
    }, [dataSidang]);

    if (!profile) {
        return <h1>Loading</h1>
    }

    const role = localStorage.getItem('role')
    const isMahasiswa = role === "mahasiswa"

    const exportJadwalSidangToPDF = () => {
        const doc = new jsPDF();

        doc.text("Jadwal Sidang Mahasiswa", 14, 10);

        autoTable(doc, {
            startY: 20,
            head: [[
                "ID Sidang",
                "ID Mahasiswa",
                "ID Ruangan",
                "Tanggal",
                "Mulai",
                "Selesai",
                "Status"
            ]],
            body: dataSidang.map(row => [
                row.id_sidang,
                row.id_mhs,
                row.id_ruangan,
                row.tanggal_sidang,
                row.waktu_mulai,
                row.waktu_selesai,
                row.status
            ]),
        });

        doc.save("jadwal-sidang.pdf");
    }

    const handleDaftarSidangWrapper = async () => {
        try {
            const res = await handleDaftarSidang(profile)
            MySwal.fire("Success", res.message, "success")
            fetchData()
        } catch (e) {
            MySwal.fire("Error", e.message, "error")
        }
    }

    const handleUpdateStatusWrapper = async (id, status) => {
        try {
            const res = await updateStatusSidang(id, status);
            MySwal.fire("Success", res.message, "success");
        } catch (e) {
            MySwal.fire("Error", e.message || "Gagal update status", "error");
        }
    }

    return (
        <MainLayout>
            <div className="min-h-[90vh] w-full flex flex-col items-center gap-6 px-4">
                <div className="w-full max-w-6xl">
                    <div className="relative flex justify-center items-center my-8">

                        <button
                            className={`absolute left-0 bg-slate-800 text-white py-2 px-4 rounded-full flex items-center gap-2 hover:scale-105 hover:opacity-80 transition-all ${!isMahasiswa && 'hidden'}`}
                            onClick={() => exportJadwalSidangToPDF()}
                        >
                            <MdOutlineFileDownload className="text-lg" /> Download
                        </button>
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
                                                                handleUpdateStatusWrapper(sidang.id_sidang, statusSidang[sidang.id_sidang])

                                                            }}>
                                                                <select
                                                                    className="border border-gray-300 rounded p-2"
                                                                    value={statusSidang[sidang.id_sidang] || ""}
                                                                    onChange={(e) => {
                                                                        setStatusSidang(prev => ({
                                                                            ...prev,
                                                                            [sidang.id_sidang]: e.target.value
                                                                        }));
                                                                    }}
                                                                >
                                                                    <option value="DITUNDA">DITUNDA</option>
                                                                    <option value="DIJADWALKAN">DIJADWALKAN</option>
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
