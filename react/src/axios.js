import axios from "axios"
import { router } from "./main"
import { useContext } from "react"
import { callContext } from "./components/Context/setContext"

 
const axiosClient = axios.create({
    withCredentials: true,
    timeoutErrorMessage:"takes too long to respond",
    withXSRFToken:true,
    baseURL:`http://localhost:8000/api/`,
 })

 //here goes the handle  interceptor for 500 internal server error
 axiosClient.interceptors.response.use(response=>{
    return response
 },error =>{
   
    if(error.response && error.response.status === 401){
      
         sessionStorage.setItem("authenticated",false)
        router.navigate('/auth/login')
         return error
    }
    throw error
 })

export default axiosClient