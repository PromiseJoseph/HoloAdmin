import React from "react";

const StaticProfile = () => {
    return (
        <>
            

                <div className="card">
                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                        <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                            <h2>Odelola promise</h2>
                            <h3>Full stack developer</h3>
                            <div className="social-links mt-2">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                    </div>
                </div>

        
        </>
    )
}
export default StaticProfile;
