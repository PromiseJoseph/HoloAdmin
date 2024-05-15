import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {

    return (
        <>
      <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <NavLink to={'/'} className="nav-link ">
      
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
       
        </NavLink>
      </li>{/* End Dashboard Nav */}

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide"></i><span>Registration</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
          <NavLink to={'registrations/newregistration'}>
              <i className="bi bi-circle"></i><span>New Registration</span>
           </NavLink>
          </li>
          <li>
            <NavLink to={'registrations/editregistration'}>
              <i className="bi bi-circle"></i><span>Edit Registration</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'registrations/allregistrations'}>
              <i className="bi bi-circle"></i><span>All Registrations</span>
            </NavLink>
          </li>
           </ul>
      </li>{/* End Components Nav */}
      <li className="nav-heading">Pages</li>

      <li className="nav-item">
        <NavLink to="user/profile"className="nav-link collapsed" >
          <i className="bi bi-person"></i><span>Profile</span>
        </NavLink>
    </li>{/* End Profile Page Nav */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>{/* End F.A.Q Page Nav */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li>{/* End Contact Page Nav */}

      

    </ul>

  </aside>{/* End Sidebar */}

        </>
    )
}
export default Sidebar;