import { useNavigate } from 'react-router-dom'

export default function Menus(props) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        props.navigate? navigate(`/${props.navigate}`) : navigate('/landingpage')
    }

    return(
        <ul className="flex gap-5 ms-8 items-center py-2 ps-2 w-[80%] hover:bg-slate-700 hover:scale-105 transition-all duration-150 ease-in-out rounded-md cursor-pointer" onClick={handleNavigate}>
            <li className="text-white text-sm">{props.icon}</li>
            <li className="text-white text-xs">{props.name}</li>
        </ul>
    )
}