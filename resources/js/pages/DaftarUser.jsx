import React, { useContext, useState } from 'react'
import { DataContext } from '../lib/DataContext'
import { MdDeleteForever } from 'react-icons/md'
import { handleDelete } from '../api/userApi'
import { handleUpdateIsAdmin } from '../api/userApi'
import { FaUserCheck, FaUserMinus } from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MiniPopUp from '../components/MiniPopUp'

const DaftarUser = () => {
  const { dataUser, fetchData } = useContext(DataContext)
  const MySwal = withReactContent(Swal)
  const [hoveredButton, setHoveredButton] = useState(null)

  const handleDeleteWrapper = async (id) => {
    try {
      const res = await handleDelete(id)
      console.log(res)
      MySwal.fire('Success', res.message, 'success')
      fetchData()
    } catch (e) {
      MySwal.fire('Error', e.message, 'error')
    }
  }

  const handleUpdateIsAdminWrapper = async (id, isAdmin) => {
    try {
      const res = await handleUpdateIsAdmin(id, isAdmin)
      console.log(res)
      MySwal.fire('Success', res.message, 'success')
      fetchData()
    } catch (e) {
      MySwal.fire('Error', e.message, 'error')
    }
  }

  return (
    <div className="w-full px-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-8 mb-10">Daftar User</h2>

      <div className="w-full h-full overflow-x-auto">
        <table className="min-w-[600px] w-full border border-gray-300 text-sm overflow-visible relative z-1">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-3 border w-12 text-center">ID</th>
              <th className="p-3 border text-center">Username</th>
              <th className="p-3 border text-center">Role</th>
              <th className="p-3 border text-center">Is Admin</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className='overflow-visible'>
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
                  <td className="p-3 gap-3 border text-center flex items-center justify-center relative">
                    <button
                      className="text-red-600 relative"
                      onClick={() => handleDeleteWrapper(user.id_user)}
                      onMouseOver={() => setHoveredButton(`delete-${user.id_user}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      <MdDeleteForever className="text-2xl hover:scale-110 transition-all ease-in-out duration-150" />
                      {hoveredButton === `delete-${user.id_user}` && (
                        <MiniPopUp text={'Delete'} isHidden={hoveredButton !== `delete-${user.id_user}`} />
                      )}
                    </button>
                    {
                      user.isAdmin === 'N' ? (
                        <button
                          className="text-green-600 relative "
                          onClick={() => handleUpdateIsAdminWrapper(user.id_user, user.isAdmin)}
                          onMouseOver={() => setHoveredButton(`admin-${user.id_user}`)}
                          onMouseLeave={() => setHoveredButton(null)}
                        >
                          <FaUserCheck className="text-xl hover:scale-110 transition-all ease-in-out duration-150" />
                          {hoveredButton === `admin-${user.id_user}` && (
                            <MiniPopUp text={'Set Admin'} isHidden={hoveredButton !== `admin-${user.id_user}`} />
                          )}
                        </button>
                      ) : (
                        <button
                          className="text-red-600 relative "
                          onClick={() => handleUpdateIsAdminWrapper(user.id_user, user.isAdmin)}
                          onMouseOver={() => setHoveredButton(`admin-${user.id_user}`)}
                          onMouseLeave={() => setHoveredButton(null)}
                        >
                          <FaUserMinus className="text-xl hover:scale-110 transition-all ease-in-out duration-150" />
                          {hoveredButton === `admin-${user.id_user}` && (
                            <MiniPopUp text={'Del Admin'} isHidden={hoveredButton !== `admin-${user.id_user}`} />
                          )}
                        </button>
                      )
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr className='overflow-visible'>
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