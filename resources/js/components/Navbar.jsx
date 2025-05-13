import { IoPersonSharp } from "react-icons/io5";
import Popup from "./Popup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LuPanelRight } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import PopupNotification from "./PopupNotification";

export default function Navbar(props) {
    const [isHidden, setIsHidden] = useState(true)
    const [isHiddenNotification, setIsHiddenNotification] = useState(true)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/profile')
    }

    return (
        <div className="w-full">
            <nav className="h-[6vh] md:[7vh] lg:h-[8vh] w-full flex flex-row justify-between bg-slate-800 items-center">
                <h3
                    className="ml-3 text-slate-50 hover:bg-slate-900 rounded-md transition-all duration-150 ease-in-out p-2 cursor-pointer text-2xl"
                    onClick={props.onClick}
                >
                    <LuPanelRight />
                </h3>
                <ul className="w-fit flex items-center gap-5 mr-5 transition-all ease-in-out duration-150 cursor-pointer"
                >
                    <li className="text-slate-50">{props.username}</li>
                    <li
                        onMouseEnter={() => setIsHidden(false)}
                        onMouseLeave={() => setIsHidden(true)}
                        onClick={() => handleNavigate()}>
                        <div className="w-10 h-10 bg-slate-800 border border-slate-50 rounded-full relative">
                            <h2 className="w-full h-full flex justify-center items-center text-slate-50">
                                <IoPersonSharp />
                            </h2>
                            <Popup isHidden={isHidden} username={props.username} role={props.role} roleId={props.roleId} isAdmin={props.isAdmin} />
                        </div>
                    </li>
                    <li
                         onMouseEnter={() => setIsHiddenNotification(false)}
                         onMouseLeave={() => setIsHiddenNotification(true)}
                    >
                        <h3
                            className="text-slate-50 hover:bg-slate-900 rounded-md transition-all duration-150 ease-in-out p-2 cursor-pointer text-2xl relative"
                        >
                            <IoIosNotifications />
                            <PopupNotification isHidden={isHiddenNotification} username={props.username} role={props.role} roleId={props.roleId} isAdmin={props.isAdmin} />
                        </h3>
                    </li>
                </ul>
            </nav>
        </div>
    )
}