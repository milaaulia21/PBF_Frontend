import MainLayout from "../components/MainLayout";
import Data from '../lib/Data'

export default function PendaftaranSidang() {
    const { dataMahasiswa, dataRuangan, dataJadwal, dataDosen } = Data

    return (
        <>
            <MainLayout>
                <div className="min-w-full min-h-full flex flex-col items-center">
                    <h1 className="text-2xl font-semibold mt-4 mb-10">Form Pendaftaran</h1>
                    <form action="" className="border w-[70%] flex flex-col gap-4 p-5 rounded-md">
                        <label htmlFor="nama" className="font-semibold">Masukkan Nama</label>
                        <select name="nama" id="nama" className="w-full p-2 rounded-md bg-slate-100 mb-4">
                            {dataMahasiswa.map((mhs) => (
                                <option value={mhs.nama_mhs} className="bg-slate-100 border-none rounded-none">{mhs.nama_mhs}</option>
                            ))}
                        </select>

                        <label htmlFor="ruangan" className="font-semibold">Pilih Ruangan</label>
                        <select name="nama" id="nama" className="w-full p-2 rounded-md bg-slate-100 mb-4">
                            {dataRuangan.map((r) => (
                                <option value={r.nama_ruangan} className="bg-slate-100 border-none rounded-none">{r.nama_ruangan}</option>
                            ))}
                        </select>

                        <label htmlFor="">Masukkan</label>


                    </form>
                </div>
            </MainLayout>
        </>
    )
}