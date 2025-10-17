
import { apiConnector } from "../services/apiConnector.js";
import { AuthApiEndPoint } from "../services/apiEndPoint.js"
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { setToken } from "../redux/userSlice.js";
export function LoginServices(data, navigate) {

    const { email, password } = data;
    return async (dispatch) => {
        try {
            console.log("Login!!!!!!!!!!!!!!!!!!!!!!!!!!")
            // const id = toast.success("loading")
            // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
            const response = await apiConnector("POST", AuthApiEndPoint.lOGIN_API, { email, password });
            console.log("api response is Login", response);
            navigate("/");
            toast.success("success")
            dispatch(setToken(Cookies.get('token')))
            localStorage.setItem("token", Cookies.get('token'))
            // toast.dismiss(id)
        }
        catch (error) {
            toast.error(error.response.data.messgage)
            console.log("Sign calling frontend services", error.response.data.messgage)
        }
    }
}