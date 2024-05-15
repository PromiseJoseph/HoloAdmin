import React from 'react';
import './ChartFormat.js';
const Chart = () => {
  return (
    
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

            <div className="card-body pb-0">
              <h5 className="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style={{"minHeight":`${400}px`}} className="echart"></div>

            </div>
          </div>
  );
};

export default Chart;
