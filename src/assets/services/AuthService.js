import axios from "axios";
import {POSTAuthApi} from "./Endpoint"
const AuthService = {
    async PostAuthRequest(forms) {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.post(POSTAuthApi, forms, {
                headers: {
                    Authorization: `Bearer ${authToken}` 
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default AuthService;
