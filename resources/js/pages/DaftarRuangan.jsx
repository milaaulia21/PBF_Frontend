import MainLayout from "../components/MainLayout";
import Data from "../lib/Data";

export default function DaftarRuangan() {

const { dataRuangan } = Data    
      
      let no = 1

    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Ruangan</h2>
                    <table className="border w-[70%]">
                        <tr className="border bg-slate-500 text-white">
                            <th className="p-4 border w-12 text-center">No</th>
                            <th className="p-4 border w-1/2 text-center">Kode Ruangan</th>
                            <th className="p-4 border w-1/2 text-center">Nama Ruangan</th>
                        </tr>
                        {dataRuangan.map((ruangan) => (
                            <tr className="">
                                <td className="p-4 border text-center">{no++}</td>
                                <td className="p-4 border text-center">{ruangan.kode_ruangan}</td>
                                <td className="p-4 border text-center">{ruangan.nama_ruangan}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </MainLayout>
        </>
    )
}