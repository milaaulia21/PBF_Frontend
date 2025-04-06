import MainLayout from "../components/MainLayout";
import { useContext } from "react";
import { DataContext } from "../lib/DataContext";
import DeleteEditRow from "../components/DeleteEditRow";
import { handleDelete } from "../api/ruanganApi";
import { useNavigate } from "react-router-dom";

export default function DaftarRuangan() {
  const dataContext = useContext(DataContext)
  const { dataRuangan, fetchData } = dataContext

  const navigate = useNavigate()
  const handleDeleteWrapper = async (id) => {
    try {
      await handleDelete(id)
      fetchData()
    } catch (e) {
      console.error(e)
    }
  }

  const handleEditWrapper = (id) => {
    navigate('/edit-ruangan', {
      state: {
        id: id
      }
    })
  }

  return (
    <>
      <MainLayout>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mt-4 mb-10">Daftar Ruangan</h2>
          <table className="border w-[70%] mb-10">
            <thead>
              <tr className="border bg-slate-500 text-white">
                <th className="p-4 border w-12 text-center">No</th>
                <th className="p-4 border w-1/2 text-center">Kode Ruangan</th>
                <th className="p-4 border w-1/2 text-center">Nama Ruangan</th>
                <th className="p-4 border w-1/2 text-center">Edit</th>
                <th className="p-4 border w-1/2 text-center">Del</th>
              </tr>
            </thead>
            <tbody>
              {dataRuangan.map((ruangan, index) => (

                <tr className="" key={index}>
                  <td className="p-4 border text-center">{index + 1}</td>
                  <td className="p-4 border text-center">{ruangan.kode_ruangan}</td>
                  <td className="p-4 border">{ruangan.nama_ruangan}</td>
                  <DeleteEditRow onDelete = {() => handleDeleteWrapper(ruangan.id_ruangan)} onEdit = {() => handleEditWrapper(ruangan.id_ruangan)}/>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainLayout>
    </>
  )
}