import React from 'react';

import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
       <div className="row">
            <div className="col-md-3  col-12">
           <Sidebar/>
        </div>
        <div className="col-md-9">
           
        </div>
       </div>
    );
};

export default Dashboard;