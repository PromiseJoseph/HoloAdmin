import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { callContext } from '../Context/setContext';
const RevenueCard = () => {

  const{monthregistry,dayregistry,revcall,setRevcall,registcount}=useContext(callContext)
  
console.log(dayregistry)
  //for all revenue realised
  //can be edited to use fixed price
  const [totalrevenue,setTotalrevenue] = useState()
  
  
  const fixedPerRev = 1000
  //claculates fixed revenue for the total regisry ==Temporarily 
  useEffect(()=>{
    
    const total= regist => {
      return regist*fixedPerRev
}
console.log(revcall[revcall.length-1])
setTotalrevenue(total(revcall[revcall.length-1]))
},[revcall]);
 
  return (
            <>
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">

                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item text-muted" onClick={e=>{
                      setRevcall(dayregistry);   
                    }}>Today</a></li>
                    <li><a className="dropdown-item text-muted" onClick={e=>{
                      setRevcall(monthregistry);  
                    }}>This Month</a></li>
                    <li><a className="dropdown-item text-muted" onClick={e=>{
                      setRevcall(registcount);  
                    }}>This Year</a></li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">All Revenue <span>| This Year</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>{totalrevenue}</h6>
                      <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

        </>
  );
};

export default RevenueCard;
