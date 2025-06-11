import React from 'react'
import { MdDeleteForever } from 'react-icons/md'


const MiniPopUp = (props) => {
  return (
    <div className='w-full border p-2 rounded-md hover:bg-slate-600 hover:text-slate-200 flex gap-2 items-center' onClick={() => props.onNavigate()}>
      <p className='text-xl text-red-600 hover:scale-110 transition-all ease-in-out duration-150' onClick={(e) => {
          e.stopPropagation(); // 🚫 Block event bubbling
          props.onDelete();
        }}><MdDeleteForever /></p>
      <p className='text-slate-300 text-xs'>{props.text}</p>
    </div>
  )
}

export default MiniPopUp
