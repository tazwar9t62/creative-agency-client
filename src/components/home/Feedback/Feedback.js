import React, { useEffect, useState } from 'react';
import FeedbackDetails from './FeedbackDetails';

const Feedback = () => {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
        <section style={{height:"600px"}} className="service-container mt-5">
        <div className="text-center">
            <h2> <span style={{color:"#2D2D2D"}}>Provide awesome </span> <span className="title-green">services</span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
         {reviews.map(review => <FeedbackDetails review={review} key={review._id}></FeedbackDetails>)} 
        </div>
     </div>
    </section>
    );
};

export default Feedback;