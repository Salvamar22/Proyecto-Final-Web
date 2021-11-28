import { AiOutlineCloud } from "react-icons/ai";
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => 
{
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate('/Login')
        console.log("si da click");
    }
  
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-400">
            <AiOutlineCloud className="text-8xl m-4"/>
            <h2 className="text-6xl font-roboto text-center mb-6">404</h2>
            <h3 className="text-xl font-roboto text-center">Pagina prohibida.</h3>
            <p className="text-lg font-roboto text-center">No eres digno de acceder a esta pagina.</p>
            <button className="font-roboto bg-gray-600 m-4 py-2 px-4 rounded" onClick={(e) => onClick(e)}>Go to Login</button>
        </div>
    );
}

export default NotFound;