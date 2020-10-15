import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetails from '../../home/Services/ServiceDetails';
import Sidebar from '../Sidebar/Sidebar';
import OrderedServiceDetails from './OrderedServiceDetails';

const OrderedServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/orderedServices?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderedServices(data));
  }, []);
    return (
        <section className=" container-fluid">
            <div className="row"> 
        <div className="col-md-3">
          <Sidebar />
        </div>        
          <div className="col-md-9 dashboard-background" > 
          <div className="pt-5 pl-3">
                <h2>Your Ordered services</h2>
            </div>          
            <div className="col-md-12  mt-5">
            <div className="row w-75 mt-5 pt-5">
         {orderedServices.map(service => <OrderedServiceDetails service={service} key={service._id}></OrderedServiceDetails>)} 
                </div>
             </div>
            </div>
          </div>
        </section>
    );
};

export default OrderedServices;