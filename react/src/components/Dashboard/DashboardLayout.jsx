import React from "react";
import Dashboard from "./Dashboard";
import Title from "../Header/Title";

const DashboardLayout = () => {
  
  return (
    <>

   {/* title goes here */}
   <Title
   page=  "Dashboard"
   prevLink= "/"
    prev= "Home"
    active= "Dashboard"

   />

    <section className="section dashboard">
      
       {/* dashboard goes here */}
       <Dashboard/>
      
    </section>

  
  </>
  );
};

export default DashboardLayout;
