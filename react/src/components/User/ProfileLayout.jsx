import React from "react";
import Title from "../Header/Title";
import StaticProfile from "./StaticProfile";
import ProfileDetailsLayout from "./ProfileDetails/ProfileDetailsLayout";
const ProfileLayout = () => {

    return (
        <>
            <Title
                page="Profile"
                prevLink="/"
                prev="Home"
                active="User / Profile"

            />

            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">
                        {/** StaticProfile goes here */}
                        <StaticProfile />
                    </div>
                    <div class="col-xl-8">
                        {/** ProfilDetailsLayout goes here */}
                        <ProfileDetailsLayout/>
                    </div>

                </div>

            </section>
        </>

    )

}
export default ProfileLayout;