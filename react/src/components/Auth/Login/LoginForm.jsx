import React, { useContext, useState } from "react";
import { FormTitle } from "../AuthLayout";
import { NavLink,Navigate } from "react-router-dom";
import { login, reduceThrownError } from "../../api/api";
import { callContext } from "../../Context/setContext";
import { router } from "../../../main";

const LoginForm = () => {
    //using local storage as auth/login layout refresh onLoad()
    const authenticated = JSON.parse(sessionStorage.getItem("authenticated"));
    const[loading,setLoading] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
    });
console.log(authenticated)
if( authenticated == true){
    router.navigate("/")
}
    const [resError, setResError] = useState()
    console.log(resError)

    const handleLogin = (dataVal) => {
        setLoading(true);
        var guestUser = login(dataVal);
        guestUser.then(response => {
            setLoading(false)
            if (response.status == 204) {
                router.navigate("/")
            }
        })
        guestUser.catch(error => {
            if (error.response) {
                setLoading(false)
                const mergedErr = reduceThrownError(error);
                setResError({ __html: mergedErr.join("<br>") })


            }
        })
    }


    return (
        <>

            <FormTitle Title="Login to Your Account" Description="Enter your email & password to login" />
            {
                resError ?
                    <>
                        <div class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
                            <p dangerouslySetInnerHTML={resError}></p>
                        </div>

                    </> :
                    ""
            }
            <form className="row g-3 needs-validation" >

                <div className="col-12">
                    <label for="yourEmail" className="form-label">Email</label>

                    <input type="text" name="email" className="form-control" id="yourEmail" required
                        onChange={e => setData({ ...data, email: e.target.value })}
                    />
                    {/* <div className="invalid-feedback">Please enter your username.</div> */}

                </div>

                <div className="col-12">
                    <label for="yourPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="yourPassword" required
                        onChange={e => setData({ ...data, password: e.target.value })}
                    />

                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                    </div>
                </div>
                { loading ?
                <>
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">Loading...</span>
              </button>
                </>:
                <>
                <div className="col-12">
                    <button className="btn btn-primary w-100"
                        onClick={e => {
                            e.preventDefault()
                            handleLogin(data)
                        }}
                    >Login</button>
                </div>
                </>
                }
                <div className="col-12">
                    <p className="small mb-0">Don't have account?
                        <NavLink to={"/auth/signup"}>Create an Account</NavLink>
                    </p>
                </div>
            </form>

        </>
    );

}
export default LoginForm 