import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});
  
 
  const handelfileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handelBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handelSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if(data){
            alert("Added a service successfully")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
        <div className=" container-fluid backgroundAdmin ">
        <div className=" row ">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9 dashboard-background">
          <div className="pt-5 pl-3">
                <h2>Add Review</h2>
            </div>
           
            <form onSubmit={handelSubmit}>
              <div
                style={{ backgroundColor: "#fff", padding: "20px" }}
                className="d-flex col-md-8"
              >
                <div className="col-md-5 ">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      onBlur={handelBlur}
                      type="text"
                      class="form-control"
                      name="title"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <textarea
                      onBlur={handelBlur}
                      type="text"
                      class="form-control"
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group form-file">
                  <label for="file">Icon</label>
                  <input
                    onChange={handelfileChange}
                    type="file"
                    class="form-control"
                    name="file"
                  />
                </div>
              </div>
              <br />
              <button type="submit" class="btn btn-brand text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddService;