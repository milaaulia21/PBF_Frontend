import { useState, createContext, useEffect } from "react";

export const DataContext = createContext([]);

export default function DataProvider({ children }) {
    const [dataDosen, setDataDosen] = useState([]);
    const [dataMahasiswa, setDataMahasiswa] = useState([]);
    const [dataSidang, setDataSidang] = useState([]);
    const [dataRuangan, setDataRuangan] = useState([]);

    // Fungsi untuk fetch semua data
    const fetchData = async () => {
        try {
            const [dosen, mahasiswa, sidang, ruangan] = await Promise.all([
                fetch("http://localhost:8080/dosen"),
                fetch("http://localhost:8080/mahasiswa"),
                fetch("http://localhost:8080/sidang"),
                fetch("http://localhost:8080/ruangan"),
            ]);

            if (!dosen.ok || !mahasiswa.ok || !sidang.ok || !ruangan.ok) {
                throw new Error("Gagal mengambil data");
            }

            const [dosenData, mahasiswaData, sidangData, ruanganData] = await Promise.all([
                dosen.json(),
                mahasiswa.json(),
                sidang.json(),
                ruangan.json(),
            ]);

            setDataDosen(dosenData);
            setDataMahasiswa(mahasiswaData);
            setDataSidang(sidangData);
            setDataRuangan(ruanganData);
        } catch (err) {
            console.error("Error saat fetch data:", err);
        }
    };

    // Ambil data saat komponen di-mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ dataDosen, dataMahasiswa, dataSidang, dataRuangan, fetchData }}>
            {children}
        </DataContext.Provider>
    );
}
