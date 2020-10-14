import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleService, setSingleService] = useContext(UserContext);

  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const dataOrder = { ...data, ...singleService };
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
    return (
        <section className=" container-fluid">
        <div className="row">         
          <div className="col-md-12 dashboard-background" > 
          <div className="pt-5 pl-3">
                <h2>Place an Order</h2>
            </div>          
            <div className="col-md-10  mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="name"
                  className="control"
                  defaultValue={loggedInUser.name}
                  ref={register}
                />
                <br />
  
                <input
                  name="email"
                  type="email"
                  className="control"
                  defaultValue={loggedInUser.email}
                  ref={register}
                />
                <br />
  
                <input
                  name="title"
                  className="control"
                  defaultValue={singleService.title}
                  ref={register}
                />
                <br />
  
                <textarea
                  className="controlText"
                  name="description"
                  ref={register}
                  defaultValue={singleService.description}
                  
                  cols="20"
                  rows="10"
                ></textarea>
                <br />
                <input
                  name="price"
                  className="control"
                  placeholder="Price"
                  defaultValue={singleService.price}
                  ref={register}
                />
                <input
                  style={{ display: "none" }}
                  name="status"
                  className="control"
                  defaultValue="Pending"
                  ref={register}
                />
                <br />
                <button className="btn btn-brand text-white" type="submit">
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Order;