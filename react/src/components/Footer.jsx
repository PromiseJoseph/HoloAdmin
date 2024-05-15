import React from "react";
import { appName } from "../Layout";

const Footer = () => {
  return (
   <> 
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright <strong><span>{appName}</span></strong>. All Rights Reserved
      </div>
     
    </footer>
    </>
  );
};

export default Footer;
