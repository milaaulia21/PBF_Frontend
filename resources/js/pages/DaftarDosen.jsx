import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";

export default function DaftarDosen() {
    const dataContext = useContext(DataContext)
    const { dataDosen } = dataContext

    let no = 1
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Dosen</h2>
                    <table className="border w-[70%]">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
                                <th className="p-4 border w-12 text-center">No</th>
                                <th className="p-4 border w-1/2 text-center">Nama Dosen</th>
                                <th className="p-4 border w-1/2 text-center">NIP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDosen.map((dosen, index) => (
                                <tr key={index}>
                                    <td className="p-4 border text-center">{no++}</td>
                                    <td className="p-4 border">{dosen.nama_dosen}</td>
                                    <td className="p-4 border">{dosen.nip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}