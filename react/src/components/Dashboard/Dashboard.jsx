import React from "react";
import SalesCard from "./SalesCard";
import RevenueCard from "./RevenueCard";
import CustomerCard from "./CustomerCard";
import RecentSales from "./RecentSales";
import RecentActivity from "./RecentActivity";
import Chart from "./Chart";

const Dashboard = () => {

  return (
    <>

      <div className="row">

        { /* Left side columns */}
        <div className="col-lg-8">
          <div className="row">

            {/*Sales Card  goes here*/}
            <SalesCard />
            {/* Revenue Card goes here*/}
            <RevenueCard />

            {/* Customers Card  goes here*/}
            <CustomerCard />

            {/*Recent Sales goes here*/}
            <RecentSales />



          </div>
        </div>
        { /* End Left side columns */}

        { /* Right side columns */}
        <div className="col-lg-4">
          {/* Recent Activity goes here */}
          <RecentActivity/>

          {/*Chart goes here*/}
          <Chart/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
