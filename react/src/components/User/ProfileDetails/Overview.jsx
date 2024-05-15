import React, { useContext } from "react";
import { callContext } from "../../Context/setContext";

const Overview = ()=>{
  const{currentUser} = useContext(callContext)
    return(
        <>
           
                  <h5 className="card-title">About</h5>
                  <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{currentUser.name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Company</div>
                    <div className="col-lg-9 col-md-8">{currentUser.company}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Job</div>
                    <div className="col-lg-9 col-md-8">{currentUser.role}</div>
                  </div>


                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Address</div>
                    <div className="col-lg-9 col-md-8">{currentUser.address}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">(+) {currentUser.number}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{currentUser.email}</div>
                  </div>

                
        </>
    );
}
export default Overview