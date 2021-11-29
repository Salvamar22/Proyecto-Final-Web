const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const userServices = {};

userServices.getAll = async (token, limit=10, page=0) => {
    try{
        const config = { 
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const response = await fetch(`${BASE_URL}/post/all?limit=${limit}&page=${page}`, config);

        if (response.ok) {
            const data = await response.json();
            return data.data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
}

userServices.getOne = async (token, id) => {
    try{
        const config = { 
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const response = await fetch(`${BASE_URL}/post/one/${id}`, config);

        if (response.ok) {
            const data = await response.json();
            return data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};

userServices.getFavorites = async (token) => {
    try{
        const config = { 
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const response = await fetch(`${BASE_URL}/post/fav`, config);

        if (response.ok) {
            const data = await response.json();
            return data.favorites; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};


userServices.like = async (token, id) => {
    try{
        const config = { 
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const response = await fetch(`${BASE_URL}/post/like/${id}`, config);

        if (response.ok) {
            const data = await response.json();
            return data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};


userServices.fav = async (token, id) => {
    try{
        const config = { 
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const response = await fetch(`${BASE_URL}/post/fav/${id}`, config);

        if (response.ok) {
            const data = await response.json();
            return data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};

userServices.comment = async (token, id, description) => {
    try{
        const config = { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                description: description
            })
        };
        
        const response = await fetch(`${BASE_URL}/post/comment/${id}`, config);

        if (response.ok) {
            const data = await response.json();
            return data; 
        };
    } catch (error) {
        console.error(error);
        return {};
    }
};

export default userServices;