import React from "react";
import { useContext } from "react";
import { callContext } from "../Context/setContext";
import { NavLink } from "react-router-dom";
import { logout } from "../api/api";
import { router } from "../../main";

const Nav = () => {
  const { currentUser } = useContext(callContext)
 
  //handles user logout
  const handleSignout=()=>{
    var log = logout()
    log.then(response=>{
      if(response.status == 204){
        sessionStorage.setItem("authenticated",false)
        router.navigate("/auth/login")
      }
    })
  }
  return (

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            
              <span className="d-none d-md-block dropdown-toggle ps-2">{currentUser.name}</span>
            
          </a>
          {/* End Profile Iamge Icon -->*/}

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>{currentUser.name}</h6>
              <span>{currentUser.role}</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" to="/user/profile">
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <NavLink className="dropdown-item d-flex align-items-center" 
              onClick={e=>{
                e.preventDefault();
                handleSignout();
              }}
              >
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </NavLink>
            </li>

          </ul>{/* End Profile Dropdown Items -->*/}
        </li>{/* End Profile Nav -->*/}

      </ul>
    </nav>

  );
};

export default Nav
