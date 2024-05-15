import React from 'react';
import Nav from './nav';
import Sidebar from '../Sidebar/sidebar';
import { appName, useLayoutSetup } from '../../Layout';
import { select } from '../Helpers/Selector';
const Header = () => {
/**
   * Sidebar toggle
*/
const handleToggle= ()=>{
    select('body').classList.toggle('toggle-sidebar')
}

  return (

    <>
    <header id="header" className="header fixed-top d-flex align-items-center">

      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">{appName}</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={()=>handleToggle()}></i>
      </div>{/* End Logo -->*/}

      <Nav />
    </header>

    <Sidebar/>
    </>
    );
};

export default Header;
