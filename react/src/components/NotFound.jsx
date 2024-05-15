import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = ()=>{
return(
    <>
    <main>
    <div class="container">

      <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <NavLink to={"/"} class="btn" href="index.html">Back to home</NavLink>
        <img src="assets/img/not-found.svg" class="img-fluid py-5" alt="Page Not Found"/>
        <div class="credits">
         
        </div>
      </section>

    </div>
  </main>
</>
)
}
export default NotFound