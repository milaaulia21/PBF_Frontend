import React, { useContext } from 'react'
import { DataContext } from '../lib/DataContext'
import { MdDeleteForever } from 'react-icons/md'
import { handleDelete } from '../api/userApi'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DaftarUser = () => {
  const { dataUser, fetchData } = useContext(DataContext)
  const MySwal = withReactContent(Swal)

  const handleDeleteWrapper = async(id) => {
    try{
      const res = await handleDelete(id)
      console.log(res)
      MySwal.fire('Success', res.message, 'success')
      fetchData()
    }catch(e){
      MySwal.fire('Error', res.message, 'error')
    }
  }

  return (
    <div className="w-full px-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-8 mb-10">Daftar User</h2>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full border border-gray-300 text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-3 border w-12 text-center">ID</th>
              <th className="p-3 border text-center">Username</th>
              <th className="p-3 border text-center">Role</th>
              <th className="p-3 border text-center">Is Admin</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.length > 0 ? (
              dataUser.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="p-3 border text-center">{user.id_user}</td>
                  <td className="p-3 border text-left">{user.username}</td>
                  <td className="p-3 border text-left capitalize">{user.role}</td>
                  <td className="p-3 border text-center">
                    {user.isAdmin === 'Y' || user.isAdmin === 1 ? 'Yes' : 'No'}
                  </td>
                  <td className="p-3 border text-center flex items-center justify-center ">
                    <button className="text-red-600" onClick={() => handleDeleteWrapper(user.id_user)}>
                    <MdDeleteForever className="text-2xl hover:scale-110 transition-all ease-in-out duration-150" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Tidak ada data user tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DaftarUser
