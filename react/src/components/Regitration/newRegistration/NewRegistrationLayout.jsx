import React from "react";
import Title from "../../Header/Title";
import SingleRegistration from "./SingleRegistration";
import UploadRegistration from "./UploadRegistration";
import { OptionData, SetConference } from "./OptionsSet";
import { useEffect } from "react";

const NewRegistrationLayout = () => {

    return (
        <>
            <Title
                page="New Registration"
                prevLink="/"
                prev="Home"
                active="Registration / NewRegistrtion"

            />
            <section className="section">
                <div className="row">
                    {/* single registration goes here */}
                    <SingleRegistration/>
                    {/* upload registration goes here*/}
                    <UploadRegistration/>
                </div>
            </section>


        </>
    )
}
export default NewRegistrationLayout