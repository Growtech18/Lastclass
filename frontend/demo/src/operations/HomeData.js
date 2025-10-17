
import { apiConnector } from "../services/apiConnector.js";
import { AuthApiEndPoint } from "../services/apiEndPoint.js"
import toast from 'react-hot-toast';

export function HomeDataServices(token) {


    return async (dispatch) => {
        try {
            console.log("Home Services!!!!!!!!!!!!!!!!!!!!!!!!!!")

            const response = await apiConnector("GET", AuthApiEndPoint.HOME_API, null, token);
            console.log("api response is Login", response);
          
            toast.success("success")
            return response.data.data;
           
        }
        catch (error) {
            console.log(error)
            toast.error(error.response.data.messgage)
            console.log("Sign calling frontend services", error.response.data.messgage)
        }
    }
}