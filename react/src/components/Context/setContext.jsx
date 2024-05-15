import React, { Children, createContext, useState } from "react"

export const callContext = createContext();

// export const  Usercontext = createContext();

const ContextProvider = ({children}) =>{

    const [currentUser,setCurrentUser]= useState({name:"",email:"",role:"",company:"",address:"",phone:"",});
    const[ authenticated,setAuthenticated]= useState()
    const [allregist,setAllregist] = useState([])
    const[registcount,setRegistcount]=useState([])
    const[prevcount,setPrevcount]= useState([5,20]);
    const [monthregistry,setMonthregistry]=useState([]);
    const [dayregistry,setDayregistry]=useState([]);
    const [revcall,setRevcall]= useState([0,0])
    const[salescount,setSalescount]=useState([]);
    const[recentact,setRecentact]=useState([])
    const[curedit,setCuredit] = useState([])
    const[editstatus,setEditstatus]=useState(false)
    const[load,setLoad] = useState(0);
    const value = { 
                    recentact,setRecentact,
                    allregist,setAllregist,
                    registcount, setRegistcount,
                    prevcount,setPrevcount,
                    monthregistry,dayregistry,setDayregistry,setMonthregistry,
                    revcall,setRevcall,
                    salescount,setSalescount,
                    curedit,setCuredit,
                    editstatus,setEditstatus,
                    load,setLoad,
                    currentUser,setCurrentUser,
                    authenticated,setAuthenticated,
                 }
// user

    
return(
    <>
    <callContext.Provider value={value}>
        {children}
    </callContext.Provider>
    
  
    </>
);
}
export default ContextProvider;


// for percentage change on th dashboard
export const calcFormat = arr =>{
    var percDiff = arr[arr.length - 1] - arr[arr.length - 2]
      var percDiv = percDiff/arr[arr.length - 2]
      return percDiv
}