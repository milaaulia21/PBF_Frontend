import { IoPersonSharp } from "react-icons/io5";
import Popup from "./Popup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const [isHidden, setIsHidden] = useState(true)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/profile')
    }

    return (
        <div className="w-full">
            <nav className="h-[8vh] w-full flex flex-row justify-end bg-slate-800 items-center">
                <ul className="w-fit flex items-center gap-5 mr-5 relative transition-all ease-in-out duration-150 cursor-pointer" 
                onMouseEnter={() => setIsHidden(false)} 
                onMouseLeave={() => setIsHidden(true)}
                onClick={() => handleNavigate()}    
                >
                    <li className="text-slate-50">{props.username}</li>
                    <li>
                        <div className="w-10 h-10 bg-slate-800 border border-slate-50 rounded-full ">
                            <h2 className="w-full h-full flex justify-center items-center text-slate-50">
                                <IoPersonSharp />
                            </h2>
                        </div>
                    </li>
                    <Popup isHidden={isHidden} username={props.username} role={props.role} roleId={props.roleId}/>
                </ul>
            </nav>
        </div>
    )
}