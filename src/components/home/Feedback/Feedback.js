import React, { useEffect, useState } from 'react';
import FeedbackDetails from './FeedbackDetails';

const Feedback = () => {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("https://evening-thicket-50517.herokuapp.com/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
        <section  className="service-container mt-5">
        <div className="text-center">
            <h2> <span style={{color:"#2D2D2D"}}>Client's</span> <span className="title-green">feedback</span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="row w-75 my-5 ">
         {reviews.map(review => <FeedbackDetails review={review} key={review._id}></FeedbackDetails>)} 
        </div>
     </div>
    </section>
    );
};

export default Feedback;