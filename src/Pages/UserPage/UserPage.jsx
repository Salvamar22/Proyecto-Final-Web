import React from "react";
import { useSessionContext } from "../../Contexts/SessionContext.js";
import { useEffect, useState } from "react";
import userServices from "../../Services/user.services.js";
import TabContainer from "../../Components/TabContainer/TabContainer.jsx";
import Favorite from '../../Components/Favorite/Favorite';

const UserPage = () => {
    //Aqui llamo al SessionContext, que es donde se almacena el token
    //Asi puedes pasarlo como parametro.
    const { token, user, login } = useSessionContext();
    
    const [ tabController, setTabController] = useState(0);
 
    //Este useEffect es solo para que inicie sesion automaticamente.
    //Se tiene que borrar cuando se una con lo demas
    useEffect( async () => {
        if(!token){
            const logged = await login("gp15_user", "D7TmtCY4kZf7SFFI");
            console.log(token);
        }
        console.log(user);
        console.log(token);
    }, [])

    //Otro useEffect, hoy para getAll. Lo que regresa lo podrias meter en un estado
    //Y mandarlo como parametro a un componente que renderice los posts
    useEffect( async () => {
        let res = await userServices.getAll(token, 20, 0);
        console.log(res);
    }, [user])
    
    return (
        <div>
            
-{/*/******************************<TabContainer>************************************
        Este componente es basicamente como una ventana.
        Tiene 3 propiedades. className es para agregarle estilos con clases
        tabIndex el valor cuando si se renderizara
        tabController, que le tienes que pasar un estado

        Entonces funciona de una forma muy sencilla, cuando el estado que le pases
        cambie de valor, se va a renderizar unicamente el tabContainer que tenga el 
        nuevo valor como tabIndex, con todo lo que tiene adentro

        Entonces si haces setTabController(1), se renderizara el que tiene tabIndex=1
        Y los demas se ocultaran. Asi puedes gestionar varias vistas en la misma pagina
        */}
            <TabContainer className="" tabIndex={0} tabController={tabController}>
                Soy el primer tab
                <button onClick={()=>{ setTabController(1)}}>Ir al segundo</button>
            </TabContainer>
            <TabContainer className="" tabIndex={1} tabController={tabController}>
                <button onClick={()=>{ setTabController(2)}}>Ir al Ultimo</button>
                Soy el segundo tab. Mi indice es igual a 1
            </TabContainer>
            <TabContainer className="" tabIndex={2} tabController={tabController}>
                <button onClick={()=>{ setTabController(1)}}>Regresar al segundo</button>
                Soy el Ultimo tab. Pero puedes agregar mas
                <button onClick={()=>{ setTabController(0)}}>Ir al primero</button>
            </TabContainer>
        </div>
    );
}

export default UserPage;
