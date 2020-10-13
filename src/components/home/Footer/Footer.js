import React from 'react';

const Footer = () => {
    return (
        <section style={{height:"600px" , backgroundColor:"#FBD062"}} className="">
            <div className="row">
                <div className="col-md-6 my-5 py-5">
                <div className="section-header ml-5 pl-5 mb-5">
                    
                    <h1 style={{color:"#2D2D2D"}}>Let us handle your <br/>project, professionally</h1>
                    <p className="text-muted mt-4">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
               </div>
                </div>
            
            <div className="col-md-6 my-5 py-5 pr-5 contact-form ">
           <div className="container">
               
               <div className=" m-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="email" className="form-control" placeholder="Your email address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand text-white">Send</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
       </div>
       <div>
       <p className="text-muted text-center"><small>copyright Orange labs {(new Date()).getFullYear()}</small></p>
       </div>
      
        </section>
    );
};

export default Footer;