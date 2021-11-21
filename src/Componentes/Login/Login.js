import React, {useEffect, useState} from 'react';

import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/input';
import { useSessionContexts } from '../../contexts/SessionContexts';
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
        <div class="min-h-screen bg-blue-200 py-6 flex flex-col justify-center sm:py-12 ">
            <Title text='¡BIENVENIDO!'/>
            {error && <p className="w-full rounded p-3 text-center text-white font-roboto bg-red-700 select-none">
                        Un error ha ocurrido en el inicio de sesión ingrese sus datos validos porfavor.
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
            
            <button class="mt-4 bg-indigo-500 text-white py-6 rounded-md hover:bg-indigo-600" onClick = {handleSubmit}>
                Ingresar
            </button>
            
        </div>
    )
}

export default Login;