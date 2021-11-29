import React from "react";
import { useSessionContext } from "../../contexts/SessionContext.js";
import { useEffect, useState } from "react";
import userServices from "../../Services/user.services.js";
import TabContainer from "../../Components/TabContainer/TabContainer.jsx";
import Favorite from '../../Components/Favorite/Favorite';

const UserPage = () => {
    //Aqui llamo al SessionContext, que es donde se almacena el token
    //Asi puedes pasarlo como parametro.
    const { token, user, login } = useSessionContext();
    
    const [ tabController, setTabController] = useState(0);

    useEffect( async () => {
        if(token) { //61a413c6f81b159c2fa9dd80
            //console.log(await userServices.like(token,   "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.fav(token,    "61a414c9f81b159c2faa38b0"));
            console.log(await userServices.getOne(token, "61a414c9f81b159c2faa38b0"));
            //console.log(await userServices.comment(token,"61a414c9f81b159c2faa38b0", "Buen post"));
            const favs = await userServices.getFavorites(token);
            const f = await Promise.all(favs.map(async (fId) => { return await userServices.getOne(token, fId) }));
            console.log(f);
            let res = await userServices.getAll(token, 20, 0);
            console.log(res);
        }
    }, [token])
    
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
