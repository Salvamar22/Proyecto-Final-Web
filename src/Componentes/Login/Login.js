import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';

import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/input';
import { useSessionContexts } from '../../contexts/SessionContext';
const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useSessionContexts();
    const [error, setError] = useState(false);
    const onChange = (e, save) => {
        save(e.target.value);}
  
    function handleChange(name, value){
        if(name === 'usuario'){
        setUser(value)
        } else {
            setPassword(value)
        }
    }
        async function handleSubmit(){

            const logged = await login (user, password)
            if(logged){
                console.log("logueado");
                setError(false);
            }
            else 
            setError(!logged);
        }

    return(
        <div class=" min-h-screen items-center  bg-gray-500 py-3 flex flex-col justify-center 
         ">
            <div className= "bg-white border-solid border-2 border-black flex flex-col justify-center rounded-md">
            <Title text='¡BIENVENIDO!'/>
            {error && <p className=" mt-3 rounded-md p-2 text-center text-black  bg-purple-200 select-none">
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
            
            <button class="mt-5 bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-gray-200 font-mono md:font-Cambria
            text-2xl" onClick = {handleSubmit}>
                Ingresar
            </button>
            </div>
        </div>
    )
}

export default Login;