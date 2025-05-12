import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../lib/AuthContext";
import Loading from "./Loading";
import { useState, useEffect } from "react";

export default function MainLayout({children}){
    const { profile, loading } = useAuth()
    const role = localStorage.getItem('role')
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024)
    const [isOpen, setIsOpen] = useState(() => {
        const savedSidebarState = localStorage.getItem('sidebar')
        return savedSidebarState ? JSON.parse(savedSidebarState) : false
    })
    
    // Handle responsive design and sidebar state
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768
            const tablet = window.innerWidth >= 768 && window.innerWidth < 1024
            setIsMobile(mobile)
            setIsTablet(tablet)
            
            // Auto-close sidebar on mobile or auto-open on desktop/tablet
            if (mobile) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }

        // Add resize listener
        window.addEventListener('resize', handleResize)
        
        // Initial check
        handleResize()

        // Cleanup listener
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    if (loading) {
        return <Loading />
    }

    if (!loading && !profile) {
        // Optionally redirect to login or render children as public
        return children
    }
    
    const toggleSidebar = () => {
        const newState = !isOpen
        setIsOpen(newState)
        localStorage.setItem('sidebar', JSON.stringify(newState))
    }

    return(
        <div className="w-screen h-screen flex relative">
            <Sidebar 
                username={role === "mahasiswa" ? profile.nama_mhs : profile.nama_dosen} 
                isOpen={isOpen}
                isMobile={isMobile}
                isTablet={isTablet}
                setIsOpen={setIsOpen}
            />
            <div
                className={
                    "flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out " +
                    (isMobile
                        ? isOpen
                            ? "opacity-50 pointer-events-none"
                            : "opacity-100 pointer-events-auto"
                        : isOpen
                        ? isTablet
                            ? "ml-[30vw]"
                            : "md:ml-[18vw] lg:ml-[18vw]"
                        : "ml-0")
                }
            >
                <Navbar
                    username={role === "mahasiswa" ? profile.nama_mhs : profile.nama_dosen}
                    role={role}
                    roleId={role === "mahasiswa" ? profile.nim : profile.nip}
                    isAdmin={profile.isAdmin}
                    onClick={toggleSidebar}
                />
                <div
                    className="flex-1 overflow-y-auto"
                    onClick={isMobile && isOpen ? () => setIsOpen(false) : undefined}
                >
                    {children}
                </div>
            </div>
            
            {/* Overlay for mobile when sidebar is open */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}
