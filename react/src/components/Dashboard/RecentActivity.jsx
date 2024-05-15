import React, { useContext, useEffect } from 'react';
import { calcFormat, callContext } from '../Context/setContext';
const RecentActivity = () => {
    const {allregist,recentact} = useContext(callContext);
    return (
        <>
            <div className="card">
                <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                        </li>
                           
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity" >

                        {
                            recentact.map(item=>{
                                return(
                                <ActivitySingle
                                name={item.name}
                                conference ={item.conference}
                                time={item.time}/>)
                            })
                        }

                    </div>

                </div>
            </div>
        </>
    );
}

export default RecentActivity;

export const ActivitySingle = (props) => {

    
   
    const calcTime = (time) => {

        var curTime= Date.now()
        console.log(time,curTime)
        var timeInt = curTime-time 
        console.log(timeInt);
        var timeFormat = Math.floor(timeInt/3600000)
        return timeFormat;

   }
  

        return (
        <>
            <div className="activity-item d-flex">
                <div className="activite-label">{calcTime(props.time)}</div>
                <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                <div className="activity-content">
                    Received a new registration from <a href="#" className="fw-bold text-dark">{props.name}</a> {props.conference} conference
                </div>
            </div>
        </>
    )
}