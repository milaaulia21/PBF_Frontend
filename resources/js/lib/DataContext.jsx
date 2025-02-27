import { useState, createContext, useEffect } from "react"

export const DataContext = createContext([])

export default function DataProvider({ children }) {
    const [dataDosen, setDataDosen] = useState([])
    const [dataMahasiswa, setDataMahasiswa] = useState([])
    const [dataSidang, setDataSidang] = useState([])
    const [dataRuangan, setDataRuangan] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dosen = await fetch('http://localhost:8080/dosen')
                const mahasiswa = await fetch('http://localhost:8080/mahasiswa')
                const sidang = await fetch('http://localhost:8080/sidang')
                const ruangan = await fetch('http://localhost:8080/ruangan')

                const dosenData = await dosen.json()
                const mahasiswaData = await mahasiswa.json()
                const sidangData = await sidang.json()
                const ruanganData = await ruangan.json()

                setDataDosen(dosenData)
                setDataMahasiswa(mahasiswaData)
                setDataSidang(sidangData)
                setDataRuangan(ruanganData)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData();
    }, [])

    return (
        <DataContext.Provider value={{ dataDosen, dataMahasiswa, dataSidang, dataRuangan }}>
            {children}
        </DataContext.Provider>
    )
}
