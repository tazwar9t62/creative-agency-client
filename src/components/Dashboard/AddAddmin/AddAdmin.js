import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit,  errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data){
            alert("Admin added successfully")
        }
      });
  };
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 dashboard-background">
          <div className="pt-5 pl-3">
                <h2>Add an Admin</h2>
            </div>    
            
            <div className="col-md-5 mt-5 pt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
               
                <input
                  name="email"
                  required
                  placeholder="jn@gmail.com"
                  type="email"
                  className="form-control"
                  ref={register}
                />
                <br />
  
                <input className="btn btn-brand text-white" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddAdmin;