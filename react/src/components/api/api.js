import axiosClient from "../../axios"
export const getItem = async (url)=>{
    return await axiosClient.get(url);

} 
export const getSingle = async (url,id) =>{
    return await axiosClient.get(url+id);
}
export const getPayment = async (url,id) =>{
    return await axiosClient.get(url+id);
}
export const postItem = async(url,data)=>{
    return await axiosClient.post(url,data);
}

export const editItem = async(url,id,data)=>{
    return await axiosClient.post(url+id,data);
}

export const deleteItem= async(url,id)=>{
    return await axiosClient.post(url,id)
}

export const login = async(data)=>{
    const url ="/login";
    return await axiosClient.post(url,data)
}
export const register = async(data)=>{
    const url ="/register";
    return await axiosClient.post(url,data)
}
export const forgotPassword = async(data)=>{
    const url ="/forgot-password";
    return await axiosClient.post(url,data)
}
export const resetPassword = async(data)=>{
    const url ="/reset-password";
    return await axiosClient.post(url,data)
}
export const logout = async()=>{
    const url ="/logout";
    return await axiosClient.post(url)
}


export const reduceThrownError = error =>{
  return  Object.values(error.response.data.errors).reduce((prev,cur)=>[...prev,...cur],[])
}

export const uploadFile = async (data,name)=>{
    const url ="/uploadFile/";
    return await axiosClient.post(url+name,data)
}
