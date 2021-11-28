const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const sessionServices = {};

sessionServices.login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return {};
}

sessionServices.verifyToken = async (token) => {
    try{
        const config = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
      
        const response = await fetch(`${BASE_URL}/auth/whoami`, config);

        if (response.ok) {
            const data = await response.json();
            return data;
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};

export default sessionServices;