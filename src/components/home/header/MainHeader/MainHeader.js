import React from 'react';

const MainHeader = () => {
    return (
        <div>
            <main style={{height: "200px"}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color: "#111430"}} className="display-4 font-weight-bold">Let's Grow Your Brand To The Next Level</h1>
               <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab fuga voluptatibus recusandae officia beatae?</p>
               <button className="btn btn-brand text-white text-uppercase">hire us</button>
           </div>
           <div className="col-md-6">
               <img className="img-fluid" src="https://i.ibb.co/rF96QCy/Frame.png" alt="Frame"/>
           </div>
       </main>
        </div>
    );
};

export default MainHeader;