import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
    return (
        <section className=" container-fluid">
            <div className="row"> 
        <div className="col-md-3">
          <Sidebar />
        </div>        
          <div className="col-md-9 dashboard-background" > 
          <div className="pt-5 pl-3">
                <h2>All Orders</h2>
            </div>          
            <div className="col-md-12  mt-5">
            {orders.length === 0 && <img style={{width: '100%'}} src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt=""/> }
            <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            
          </tr>
        </thead>
        <tbody>
          
          {orders.map((order) => (
            <tr>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.title}</td>
              <td>{order.description} </td>
              
            </tr>
          ))}
        </tbody>
      </table>

            </div>
            </div>
            </div>
        </section>
    );
};

export default AllOrders;