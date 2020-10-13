import React from 'react';

const FeedbackDetails = ({review}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <div style={{border:"2px solid #BFBFBF"}} className="row rounded p-2 m-2 card-container">
                <div className="d-flex justify-content-start" >
                <div className="mr-3">
                <img style={{height:"50px"}} src={review.img} alt=""/>
                </div>
                <div className="info-container">
                <h5>{review.name}</h5>
                <h6>{review.company}</h6>
                </div>
                
                </div>
                <p className="text-muted">{review.description}</p>
            </div>
           
           
            
        </div>
    );
};

export default FeedbackDetails;