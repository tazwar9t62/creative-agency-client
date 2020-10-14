import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"50px"}} src={`data:imge/png;base64,${service.img.img}`} alt=""/>
            <h5 className="my-3">{service.title}</h5>
            <p className="text-muted">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;