import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";

export default function DaftarDosen() {
    const dataContext = useContext(DataContext)
    const { dataDosen, fetchData } = dataContext

    const handleDelete = async(id) => {
        try{
            const response = await fetch(`http://localhost:8080/dosen/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

            if(!response.ok){
                throw new Error('gak betul ni bang')
            }

            fetchData()
            const result = await response.json()
            console.log(result)
        }catch(e){
            console.error(e)
        }
    }

    let no = 1
    return (
        <>
            <MainLayout>
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Dosen</h2>
                    <table className="border w-[70%] mb-10">
                        <thead>
                            <tr className="border bg-slate-500 text-white">
                                <th className="p-4 border w-12 text-center">No</th>
                                <th className="p-4 border w-1/2 text-center">Nama Dosen</th>
                                <th className="p-4 border w-1/2 text-center">NIP</th>
                                <th className="p-4 border w-1/2 text-center">Edit</th>
                                <th className="p-4 border w-1/2 text-center">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDosen.map((dosen, index) => (
                                <tr key={index}>
                                    <td className="p-4 border text-center">{no++}</td>
                                    <td className="p-4 border">{dosen.nama_dosen}</td>
                                    <td className="p-4 border">{dosen.nip}</td>
                                    <DeleteEditRow  onDelete={()=> handleDelete(dosen.id_dosen)}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}