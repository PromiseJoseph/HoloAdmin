import React, { useContext, useEffect, useState } from "react";
import { calcFormat, callContext } from "../Context/setContext";

const SalesCard = () => {
    const [percentage,SetPercentage] = useState();
    const { registcount,prevcount,dayregistry,monthregistry,salescount,setSalescount}= useContext(callContext)
    console.log(registcount,monthregistry,salescount)
    //for filter
    const[datereg,setDatereg]= useState();

    useEffect(() => {
      setDatereg(salescount[salescount.length-1])
      console.log(datereg)
      var newPercentage =calcFormat(prevcount) * 100
      console.log(newPercentage)
      SetPercentage(newPercentage.toFixed(2) + "%" )
    }, [salescount]);

    return (
        <>
            <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">

                    <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" onClick={e=>{setSalescount(dayregistry)
                            }}>Today</a></li>
                            <li><a className="dropdown-item text-muted"  onClick={e=>{setSalescount(monthregistry)
                            }}>This Month</a></li>
                            <li><a className="dropdown-item text-muted" onClick={e=>{setSalescount(registcount)
                            }}>This Year</a></li>
                        </ul>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Registration<span>| Today</span></h5>

                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-box"></i>
                            </div>
                            <div className="ps-3">
                                <h6>{datereg}</h6>
                                <span className="text-success small pt-1 fw-bold">{percentage}</span> <span className="text-muted small pt-2 ps-1">increase</span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SalesCard