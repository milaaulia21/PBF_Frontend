import MainLayout from "../components/MainLayout";
import Data from "../lib/Data";

export default function DaftarDosen() {
    const { dataDosen } = Data
    
    let no = 1
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Dosen</h2>
                    <table className="border w-[70%]">
                        <tr className="border bg-slate-500 text-white">
                            <th className="p-4 border w-12 text-center">No</th>
                            <th className="p-4 border w-1/2 text-center">Nama Dosen</th>
                            <th className="p-4 border w-1/2 text-center">NIP</th>
                        </tr>
                        {dataDosen.map((dosen) => (
                            <tr className="">
                                <td className="p-4 border text-center">{no++}</td>
                                <td className="p-4 border text-center">{dosen.nama_dosen}</td>
                                <td className="p-4 border text-center">{dosen.nip}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </MainLayout>
        </>
    )
}