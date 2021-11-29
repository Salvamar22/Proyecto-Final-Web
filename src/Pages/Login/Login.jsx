import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Title from '../../Components/Title/Title';
import Label from '../../Components/Label/Label';
import Input from '../../Components/Input/Input';
import { useSessionContext } from '../../contexts/SessionContext';

const rolePages = {
    "admin": "/admin",
    "user": "/user"
  }

const Login = () => {
    const [localUser, setLocalUser] = useState('');
    const [password, setPassword] = useState('');
    const {login, user} = useSessionContext();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const onChange = (e, save) => {
        save(e.target.value);}
  
    useEffect( () => {
        if(user) {
            navigate(rolePages[user.role] ?? "/")
        }
    }, [user])

    function handleChange(name, value){
        if(name === 'usuario'){
        setLocalUser(value)
        } else {
            setPassword(value)
        }
    }
    async function handleSubmit(){
        const logged = await login(localUser, password)
        if(logged){
            console.log("logueado");
            setError(false);
            return <Navigate replace to=
            {rolePages[localUser.role] ?? "/"}/>
        } else 
            setError(!logged);
    }

    return(
        <div className=" min-h-screen items-center  bg-gray-200 py-3 flex flex-col justify-center">
            <div className= "bg-white border-solid border-2 border-black flex flex-col justify-center rounded-md">
            <Title text='¡BIENVENIDO!'/>
            {error && <p className=" mt-3 rounded-md p-2 text-center text-black  bg-red-300 select-none">
                        Un error ha ocurrido en el inicio de sesión
                        ingrese sus datos validos porfavor.
                    </p>}
                 
            <Label text='Usuario'/>
            <Input 
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            
            }}
            handleChange={handleChange}
                />
            
            <button className="mt-5 bg-blue-400 text-white py-2 px-2 rounded-md hover:bg-pink-200 font-mono md:font-Cambria
            text-2xl" onClick = {handleSubmit}>
                Ingresar
            </button>
            </div>
        </div>
    )
}
export default Login;