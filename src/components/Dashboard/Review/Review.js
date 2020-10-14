import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit,  errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data){
            alert("Added Review Successfully")
        }
        
      });
  };
    return (
        <section className=" container-fluid">
            
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 dashboard-background">
        <div className="pt-5 pl-3">
                <h2>Add Review</h2>
            </div>
          
          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                className="control"
                placeholder="Your name"
                ref={register}
              />
              <br />
              <input
                name="company"
                placeholder="Company name"
                className="control"
                ref={register({ required: true })}
              />
             
              {errors.name && <span>This field is required</span>}
              <br />
              <textarea
                className="controlText"
                name="description"
                placeholder="description"
                id=""
                ref={register}
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button className="btn btn-brand text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review;