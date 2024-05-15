import React, { useContext, useState } from "react";
import { FormTitle } from "../AuthLayout";
import { NavLink, Navigate } from "react-router-dom";
import { register } from "../../api/api";
import { callContext } from "../../Context/setContext";
import { reduceThrownError } from "../../api/api";
import { router } from "../../../main";
const SignupForm = () => {
    //  checks level 11 authentication from the session storage
    const authenticated = JSON.parse(sessionStorage.getItem("authenticated"))

    //handles loading
    const [loading, setLoading] = useState(false)

    if (authenticated == true) {
        router.navigate("/")
    }
    const [data, setData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        address: "",
        phone: "",
        password: "",
        password_confirmation: ""
    });


    const [resError, setResError] = useState()
    console.log(resError)
    const handleSignup = (dataVal) => {
        setLoading(true)
        var guestUser = register(dataVal);
        guestUser.then(response => {
            setLoading(false)
            if (response.status == 200) {
                return router.navigate("/auth/login")
            }
        })
        guestUser.catch(error => {
            setLoading(false)
            if (error.response) {
                const mergedErr = reduceThrownError(error);
                setResError({ __html: mergedErr.join("<br>") })
            }
        })
    }

    return (
        <>

            <FormTitle Title="Create an Account" Description="Enter your personal details to create account" />
            {
                resError ?
                    <>
                        <div class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
                            <p className="fw-bold" dangerouslySetInnerHTML={resError}></p>
                        </div>

                    </> :
                    ""
            }
            <form className="row g-3 needs-validation">
                <div className="col-12">
                    <label htmlFor="yourName" className="form-label"> Full Name</label>
                    <input type="text" name="name" className="form-control" id="yourName"
                        onChange={e => setData({ ...data, name: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <label for="yourEmail" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="yourEmail"
                        onChange={e => setData({ ...data, email: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <label for="yourrole" className="form-label">Role</label>
                    <input type="text" name="role" className="form-control" id="yourrole"
                        onChange={e => setData({ ...data, role: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <label for="yourcompany" className="form-label">Company</label>
                    <input type="text" name="company" className="form-control" id="yourcompany"
                        onChange={e => setData({ ...data, company: e.target.value })}
                        required />
                </div>


                <div className="col-12">
                    <label for="youraddress" className="form-label">Address</label>
                    <input type="text" name="address" className="form-control" id="youraddress"
                        onChange={e => setData({ ...data, address: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" id="phone"
                        onChange={e => setData({ ...data, phone: e.target.value })}
                        required />
                </div>


                <div className="col-12">
                    <label for="yourPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="yourPassword"
                        onChange={e => setData({ ...data, password: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <label for="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" name="password_confirmation" className="form-control" id="confirmPassword"
                        onChange={e => setData({ ...data, password_confirmation: e.target.value })}
                        required />
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                        <label className="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                    </div>
                </div>
                {loading ?
                    <>
                        <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span class="visually-hidden">Loading...</span>
                        </button>
                    </> :
                    <>
                        <div className="col-12">
                            <button className="btn btn-primary w-100"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignup(data)
                                }}
                            >Create Account</button>
                        </div>
                    </>
                }
                <div className="col-12">
                    <p className="small mb-0">Already have an account?
                        <NavLink to={"/auth/login"}>Log in</NavLink>
                    </p>
                </div>
            </form>

        </>
    )
}
export default SignupForm