import React, { useState } from 'react'
import MainLayout from '../components/MainLayout'
import { IoPersonSharp } from 'react-icons/io5'
import { useAuth } from '../lib/AuthContext'
import MahasiswaProfile from '../components/MahasiswaProfile'
import DosenProfile from '../components/DosenProfile'

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const { profile } = useAuth()
  const role = localStorage.getItem('role')

  const editToggle = () => {
    setIsEdit(!isEdit)
  }

  if(!profile){
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      <div className='h-full flex flex-col items-center'>
        <div className='w-24 h-24 rounded-full overflow-hidden bg-slate-800 text-white mt-10'>
          <h1 className='w-full h-full flex justify-center items-center'>
            <IoPersonSharp className='w-[50%] h-[50%]' />
          </h1>
        </div>
        {role === 'mahasiswa' ? (
          <MahasiswaProfile isEdit={isEdit} profile={profile} onEdit={editToggle}/>
        ) :
          <DosenProfile profile={profile} isEdit={isEdit} onEdit={editToggle}/>
        }
      </div>
    </MainLayout>
  )
}

export default Profile
