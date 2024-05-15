import React from "react";
import Overview from "./Overview";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import ChangePassword from "./ChangePassword";

const ProfileDetailsLayout = () => {
    return (
        <>
            <div class="card">
                <div class="card-body pt-3">
                    <ul class="nav nav-tabs nav-tabs-bordered">

                        <li class="nav-item">
                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                        </li>

                        <li class="nav-item">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                        </li>

                        <li class="nav-item">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                        </li>

                        <li class="nav-item">
                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                        </li>

                    </ul>
                    <div class="tab-content pt-2">
                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                            {/** Overview goes here */}
                            <Overview/>
                        </div>
                        <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
                            {/** EditProfile goes here */}
                            <EditProfile/>
                        </div>
                        <div class="tab-pane fade pt-3" id="profile-settings">
                            {/**Settings goes here */}
                            <Settings/>
                        </div>
                        <div class="tab-pane fade pt-3" id="profile-change-password">
                            {/**Change Password goes here */}
                            <ChangePassword/>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfileDetailsLayout