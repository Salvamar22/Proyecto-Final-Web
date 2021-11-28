const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const userServices = {};

/*Aqui te dejo estas funciones para que las implementes
Idealmente, aqui deberias hacer todos los fetch, y simplemente importar userServices
donde haga falta. Probablemente tengas que agregar otras para los likes, favoritos, etc

Si tienes dudas puedes mirar mi rama en github en el navegador y ver como estan mis
funciones y adaptarlas*/
userServices.getAll = async (token, limit=10, page=0) => {
    //Hago esta para que tengas un ejemplo general a la mano
    try{
        const config = { 
            method: "GET", //Esto es especifico de cada accion
            headers: { //Se envia el token, en el headers
                Authorization: `Bearer ${token}`
            }
        };
        //El limit y el page es especifico de este link
        const response = await fetch(`${BASE_URL}/post/all?limit=${limit}&page=${page}`, config);

        if (response.ok) {
            const data = await response.json();
            //En este caso conviene enviar el data.data. En otros casos solo el data
            //Aunque habria que ver en cada caso
            return data.data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
}

userServices.getOne = async (token, id) => {

};

userServices.getFavorites = async (token) => {

};

export default userServices;