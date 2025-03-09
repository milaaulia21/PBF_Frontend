import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";

export default function DeleteEditRow(props){
    return(
        <>
            <td className="p-4 border"><MdOutlineModeEdit className="mx-auto hover:scale-110 transition-all ease-in-out duration-150" onClick={props.onEdit} /></td>
            <td className="p-4 border"><MdDeleteForever className="mx-auto hover:scale-110 transition-all ease-in-out duration-150" onClick={props.onDelete} /></td>
        </>
    )
}