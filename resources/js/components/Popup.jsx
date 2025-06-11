import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { handleLogout } from '../api/authApi'

const Popup = (props) => {
    
    return (
        <div className={`z-10 absolute w-[20rem] flex flex-col items-center right-0 top-[2rem] bg-slate-700 rounded-md text-white p-5 transition-all ease-in-out duration-150 ${props.isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <div className='border w-10 h-10 border-slate-50 rounded-full'>
                <h2 className='w-full h-full flex justify-center items-center'>
                    <IoPersonSharp />
                </h2>
            </div>
            <h3 className='font-semibold mt-2'>{props.username}</h3>
            {props.isAdmin === 'Y'? (
                <p className='text-xs text-slate-400'>Admin</p>
            ): (
                <p className='text-xs text-slate-400'>User</p>
            )}
            <div className='w-full text-sm flex flex-col gap-2 mt-4 border-t pt-3'>
                <p>{props.role}</p>
                <p>{props.roleId}</p>
                <p className='hover:font-semibold transition-all duration-150 ease-in-out text-red-600' onClick={() => handleLogout()}>Logout</p>
            </div>
        </div>
    )
}

export default Popup
