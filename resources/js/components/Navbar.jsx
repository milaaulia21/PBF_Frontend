import { IoPersonSharp } from "react-icons/io5";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LuPanelRight } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import MiniPopUp from "./MiniPopUp";
import { handleDeleteNotification, handleGetNotification } from "../api/userApi";

export default function Navbar(props) {
    const [isHiddenProfile, setIsHiddenProfile] = useState(true)
    const [isHiddenNotification, setIsHiddenNotification] = useState(true)
    const [notification, setNotification] = useState([])
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/profile')
    }

    useEffect(() => {
        const fetchNotification = async (id) => {
            const res = await handleGetNotification(id);
            setNotification(res);
        }
        fetchNotification(props.profile.id_user)
    }, [])

    const handleDeleteNotificationWrapper = async (id) => {
        setNotification(prev => prev.filter(item => item.id !== id));
        try {
            await handleDeleteNotification(id)

        } catch (e) {
            console.error(e)
        }
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
                        onMouseEnter={() => setIsHiddenProfile(false)}
                        onMouseLeave={() => setIsHiddenProfile(true)}
                        onClick={() => handleNavigate()}>
                        <div className="w-10 h-10 bg-slate-800 border border-slate-50 rounded-full relative">
                            <h2 className="w-full h-full flex justify-center items-center text-slate-50">
                                <IoPersonSharp />
                            </h2>
                            <Popup isHidden={isHiddenProfile} username={props.username} role={props.role} roleId={props.roleId} isAdmin={props.isAdmin} />
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => setIsHiddenNotification(false)}
                        onMouseLeave={() => setIsHiddenNotification(true)}
                    >
                        <h3
                            className="text-slate-50 hover:bg-slate-900 p-2 rounded-md transition-all duration-150 ease-in-out cursor-pointer text-2xl relative"
                        >
                            <IoIosNotifications />
                            <div className={`z-10 absolute w-[20rem] flex flex-col gap-2 items-center right-0 p-5 top-[2rem] bg-slate-700 rounded-md text-white transition-all ease-in-out duration-150 ${isHiddenNotification ? 'opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                                <div className="w-full flex justify-between border-b">
                                    <h2 className="text-lg w-fit font-semibold pb-2">Notifikasi</h2>
                                    <IoIosNotifications />
                                </div>
                                <div className="w-full flex flex-col gap-2 max-h-[25rem] overflow-scroll" style={{scrollbarWidth : 'none'}}>
                                    {
                                        notification.length > 0 ? (
                                            notification.map((item, index) => (
                                                <MiniPopUp key={index} text={item.message} onNavigate={() => navigate('/jadwal-sidang')} onDelete={() => handleDeleteNotificationWrapper(item.id)}/>
                                            ))
                                        ) : (
                                            <h2 className="text-center font-semibold text-sm">Tidak Ada Notifikasi</h2>
                                        )
                                    }
                                </div>
                            </div>
                        </h3>
                    </li>
                </ul>
            </nav>
        </div>
    )
}