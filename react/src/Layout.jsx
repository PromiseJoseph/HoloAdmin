import React, { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { useEffect } from "react"; 
import { getItem} from "./components/api/api";
import { callContext } from "./components/Context/setContext";
import "../src/assets/js/main.js"

//APPNAME
export const appName = "HoloAdmin";

  export const useLayoutSetup = ()=>{
  const url = "allregistrations"
  const{ 
      setAllregist,
      setRegistcount,
      setDayregistry,
      setMonthregistry,
      setRevcall,
      setSalescount,
      setRecentact,
      setAuthenticated,
      setCurrentUser

  } = useContext(callContext)

  useEffect(()=>{
          
         let allregistration = getItem(url) 
          allregistration.then(response=> {
              var res = response.data
              if(response != undefined || response !=null){
              setAllregist(res.item)
              setRegistcount([5,res.count])
              setDayregistry([5,res.dayRegistry])
              setMonthregistry([5,res.monthRegistry])
              setRevcall([5,res.count])
              setSalescount([5,res.count])
              setRecentact(res.recentActivity)
              setAuthenticated(true)
              setCurrentUser(res.user)

              }
             sessionStorage.setItem("authenticated", true)
          })
          allregistration.catch(error=>{
            if (error.response.status == 401){
              setAuthenticated(false)
              sessionStorage.setItem("authenticated", false)
            }
          })
         
  },[])
  
}

//Layout
const Layout = () => {
    useLayoutSetup();
   
    return (
        <>
        <main id="main" className="main">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
        </>

    )  
}
export default Layout
