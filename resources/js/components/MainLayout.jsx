import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({children}){
    return(
        <div className="q-screen h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}