const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const transformPost = (rawPost) => {
    return {
        id: rawPost._id,
        title: rawPost.title,
        description: rawPost.description,
        image: rawPost.image,
        active: rawPost.active,
        createdAt: rawPost.createdAt,
        user: rawPost.user,
        likes: rawPost.likes
    }
}

const adminServices = {

    nullPost: {
        id: 0,
        title: "",
        description: "",
        image: null,
        active: false,
        createdAt: null,
        user: { username: ""},
        likes: []
    },

    createPost: async (token, title, description, image) => {
        try{
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    image: image
                })
            };
      
            const response = await fetch(`${BASE_URL}/post/create`, config);

            if (response.ok) {
                const data = await response.json();
                return data;
            };
        } catch (error) {
            console.error(error);
            return {};
        }
    },

    ownedPost: async (token) => {
        try{
            const config = { 
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
      
            const response = await fetch(`${BASE_URL}/post/owned`, config);

            if (response.ok) {
                const data = await response.json();
                return data.data;
            };
        } catch (error) {
            console.error(error);
            return {};
        }
    },
    
    updatePost: async (token, id, title, description, image) => {
        try{
            const config = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    image: image
                })
            };
            
            const response = await fetch(`${BASE_URL}/post/update/${id}`, config);

            if (response.ok) {
                const data = await response.json();
                return data;
            };
        } catch (error) {
            console.error(error);
            return {};
        }
    },

    toggleActive: async (token, id) => {
        try{
            const config = {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
      
            const response = await fetch(`${BASE_URL}/post/toggle/${id}`, config);

            if (response.ok) {
                const data = await response.json();
                return data;
            };
        } catch (error) {
            console.error(error);
            return {};
        }
    }
};


export default adminServices;

/*

const config = {
    method: "POST",
    headers: {
        "Content-Type": `application/json`
    },
    body: JSON.stringify({
        username: "gp15_admin",
        password: "fW6hnXheoxquMQ9H"
    })
};
const response = await fetch(`https://posts-pw2021.herokuapp.com/api/v1/auth/signin`, config);

if (response.ok) {
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
};

    D7TmtCY4kZf7SFFI

    token = localStorage.getItem("token");
    id='619b00736c9516021fcc6d50';
    BASE_URL='https://posts-pw2021.herokuapp.com/api/v1'
*/