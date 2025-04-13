export default function Navbar(){
    return(
        <div className="w-full">
            <nav className="h-[8vh] w-full flex flex-row justify-end bg-slate-800 items-center">
                <ul className=" w-fit flex items-center gap-5 mr-5">
                    <li className="text-slate-50">Username</li>
                    <li>
                        <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}