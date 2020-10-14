import React from 'react';
import Order from '../components/Dashboard/Order/Order';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
       <div className="row">
            <div className="col-md-3  col-12">
           <Sidebar/>
        </div>
        <div className="col-md-9">
            <Order/>
        </div>
       </div>
    );
};

export default Dashboard;