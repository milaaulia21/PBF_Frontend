import { useState, createContext, useEffect } from "react";

export const DataContext = createContext([]);

export default function DataProvider({ children }) {
    const [dataDosen, setDataDosen] = useState([]);
    const [dataMahasiswa, setDataMahasiswa] = useState([]);
    const [dataSidang, setDataSidang] = useState([]);
    const [dataRuangan, setDataRuangan] = useState([]);
    const [dataUser, setDataUser] = useState([]);

    // Fungsi untuk fetch semua data
    const fetchData = async () => {
        try {
            const [dosen, mahasiswa, sidang, ruangan, user] = await Promise.all([
                fetch("http://localhost:8080/dosen"),
                fetch("http://localhost:8080/mahasiswa"),
                fetch("http://localhost:8080/sidang"),
                fetch("http://localhost:8080/ruangan"),
                fetch("http://localhost:8080/users"),
            ]);

            if (!dosen.ok || !mahasiswa.ok || !sidang.ok || !ruangan.ok || !user.ok) {
                throw new Error("Gagal mengambil data");
            }

            const [dosenData, mahasiswaData, sidangData, ruanganData, userData] = await Promise.all([
                dosen.json(),
                mahasiswa.json(),
                sidang.json(),
                ruangan.json(),
                user.json(),
            ]);

            setDataDosen(dosenData.data);
            setDataMahasiswa(mahasiswaData);
            setDataSidang(sidangData);
            setDataRuangan(ruanganData);
            setDataUser(userData);
        } catch (err) {
            console.error("Error saat fetch data:", err);
        }
    };

    // Ambil data saat komponen di-mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ dataDosen, dataMahasiswa, dataSidang, dataRuangan, dataUser, fetchData }}>
            {children}
        </DataContext.Provider>
    );
}
