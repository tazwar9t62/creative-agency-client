import React from 'react';

const MainHeader = () => {
    return (
        <div>
            <main style={{height: "200px"}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color: "#111430"}} className="display-5 font-weight-bold">Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
               <p className="text-dark mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab fuga voluptatibus recusandae officia beatae?</p>
               <button href="/#contact" className="btn btn-brand text-white text-uppercase mt-3">hire us</button>
           </div>
           <div className="col-md-6">
               <img className="img-fluid" src="https://i.ibb.co/rF96QCy/Frame.png" alt="Frame"/>
           </div>
       </main>
        </div>
    );
};

export default MainHeader;