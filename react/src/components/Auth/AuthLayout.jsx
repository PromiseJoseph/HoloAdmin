import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { appName } from "../../Layout";
import { callContext } from "../Context/setContext";

const AuthLayout = () => {
    
   
    return (
        <>
            <main>
                <div className="container">

                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                    <div className="d-flex justify-content-center py-4">
                                        <a  className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt="" />
                                            <span className="d-none d-lg-block">{appName}</span>
                                        </a>
                                    </div>

                                    <div className="card mb-3">

                                        <div className="card-body">

                                        <Outlet/>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </section>

                </div>
            </main>
        </>)
}
export default AuthLayout;


export const FormTitle = (props) => {
    return (
        <>
            <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">{props.Title}</h5>
                <p className="text-center small">{props.Description}</p>
            </div>
        </>
    )
}