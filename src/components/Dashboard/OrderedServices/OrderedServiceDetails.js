import React from 'react';

const OrderedServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <div style={{height:"300px" , textDecoration:"none!important"}} className="m-3 shadow p-5">
           {/* <img style={{height:"50px"}} src={`data:img/png;base64,${service.img.img}`} alt=""/> */}
            <h5 className="my-3">{service.title}</h5>
            <p className="text-
            muted">{service.description}</p>
             </div>
        </div>
    );
};

export default OrderedServiceDetails;