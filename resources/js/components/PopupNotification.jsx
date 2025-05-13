const PopupNotification = (props) => {
    return (
        <div className={`z-10 absolute w-[20rem] flex flex-col items-center right-0 top-[2rem] bg-slate-700 rounded-md text-white p-5 transition-all ease-in-out duration-150 ${props.isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <h1>Ini Notifikasi</h1>
        </div>
    );
}

export default PopupNotification;