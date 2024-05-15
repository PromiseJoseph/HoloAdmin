import React from "react";
import Title from "../../Header/Title";
import EditSection from "./EditSection";
import { useEffect } from "react";



const EditRegistrationLayout = () => {
   
    return (
        <>
            <Title
                page="Edit Registration"
                prevLink="/"
                prev="Home"
                active="Registration / EditRegistration"

            />
            {/** EditSection goes here */}
            
                <EditSection />
            

        </>
    )
}
export default EditRegistrationLayout