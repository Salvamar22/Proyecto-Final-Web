import React, {useState} from 'react';

import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/input';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    
    function handleChange(name, value){
        if(name === 'usuario'){
        setUser(value)
        } else {
            setPassword(value)
        }
    }

        function handleSubmit(){
            let account = {user, password}
            if(account){
                console.log('account', account)
            }
        }

    return(
        <div class="min-h-screen bg-blue-200 py-6 flex flex-col justify-center sm:py-12 ">
            <Title text='¡BIENVENIDO!'/>
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