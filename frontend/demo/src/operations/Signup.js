
import { apiConnector } from "../services/apiConnector.js";
import { AuthApiEndPoint } from "../services/apiEndPoint.js"
import toast from 'react-hot-toast';
export function SignupServices(data, navigate) {

    const { Name, email, password } = data;
    return async () => {
        try {

            const response = await apiConnector("POST", AuthApiEndPoint.SIGNUP_API, { Name, email, password });
            console.log("api response is ", response);
            navigate("/");
            toast.success("success")


        }
        catch (error) {
            toast.error(error.response.data.messgage)
            console.log("Sign calling frontend services", error.response.data.messgage)
        }
    }
}