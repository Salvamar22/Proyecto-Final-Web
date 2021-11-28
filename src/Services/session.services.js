const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const sessionServices = {
    verifyToken: async (token) => {
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
    }
};

export default sessionServices;