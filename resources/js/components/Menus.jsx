import { useNavigate } from 'react-router-dom'

export default function Menus(props) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        props.navigate? navigate(`/${props.navigate}`) : navigate('/landingpage')
    }

    return(
        <ul className="flex gap-5 ms-8 items-center py-2 ps-2 w-[80%] hover:bg-slate-900 hover:scale-105 transition-all duration-150 ease-in-out rounded-md" onClick={handleNavigate}>
            <li className="text-white">{props.icon}</li>
            <li className="text-white text-sm">{props.name}</li>
        </ul>
    )
}