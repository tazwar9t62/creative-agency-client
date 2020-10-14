import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
       <div className="row">
            <div className="col-md-5 col-sm-6 col-12">
           <Sidebar/>
        </div>
        <div className="col-md-7">
            <h2>Order</h2>
        </div>
       </div>
    );
};

export default Dashboard;