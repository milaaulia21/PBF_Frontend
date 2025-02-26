export default function Navbar(){
    return(
        <div className="w-full">
            <nav className="h-[7vh] w-full flex flex-row justify-end">
                <ul className=" w-fit flex items-center gap-5 mr-5">
                    <li className="text-slate-700">Home</li>
                    <li className="text-slate-700">About</li>
                    <li className="text-slate-700">Contact</li>
                </ul>
            </nav>
        </div>
    )
}