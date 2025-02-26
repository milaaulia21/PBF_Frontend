import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({children}){
    return(
        <div className="min-w-[100dvw] min-h-screen flex">
            <Sidebar />
            <div className="w-full min-h-full">
                <Navbar />
                <div className="min-h-[93vh] flex">
                    {children}
                </div>
            </div>
        </div>
    )
}