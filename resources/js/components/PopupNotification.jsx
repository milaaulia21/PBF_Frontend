import { useState } from "react";
import useNotification from "../hooks/useNotification";

const PopupNotification = (props) => {
    const [notification, setNotification] = useState([])

    useNotification({
        userId: props.profile?.id_user,
        role: props.role,
        onMessage: (data) => {
            setNotification(prev => [...prev, data])
            console.log(data)
        },
    });

    return (
        <div className={`z-10 absolute w-[20rem] flex flex-col gap-2 items-center right-10 top-[2rem] bg-slate-700 rounded-md text-white p-2 transition-all ease-in-out duration-150 ${props.isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <h2>Notifikasi</h2>
            {
                notification.map(datas => {
                    return (
                        <div className="border p-2">
                            <div>
                                <p className="text-xs">{datas.message}</p>
                            </div>
                        </div>)
                })
            }
        </div>
    );
}

export default PopupNotification;