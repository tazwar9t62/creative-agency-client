import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    let [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://evening-thicket-50517.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <section  className="service-container py-5 my-5">
        <div className="text-center">
            <h2> <span style={{color:"#2D2D2D"}}>Provide awesome </span> <span className="title-green">services</span></h2>
        </div>
        {services.length === 0 && <img style={{width: '100%'}} src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt=""/> }
        <div className="d-flex justify-content-center">
        
        <div className="row w-75 mt-5 pt-5">
         {services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)} 
        </div>
     </div>
    </section>
    );
};

export default Services;