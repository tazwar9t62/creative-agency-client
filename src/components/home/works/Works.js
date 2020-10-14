import React from 'react';
import {Carousel} from '3d-react-carousal';

const Works = () => {
    let slides = [
        <img className="carousel-image img-fluid"  src="https://i.ibb.co/ZK0384s/carousel-1.png" alt="carousel-1" />,
        <img className="carousel-image img-fluid"  src="https://i.ibb.co/SX4YryP/carousel-2.png" alt="carousel-2" />  ,
        <img className="carousel-image img-fluid"   src="https://i.ibb.co/mqkym4P/carousel-3.png" alt="carousel-3" />  ,
        <img className="carousel-image img-fluid"  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img className="carousel-image img-fluid" src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <section style={{ backgroundColor:"#111430"}} className="works-container">
            <div className="text-center pt-5 my-5">
            <h2> <span style={{color:"white"}}>Here are some of</span> <span className="title-green">our works</span></h2>
            </div>
            <div className="pb-5">
            <Carousel slides={slides} autoplay={true} interval={5000}/>
            </div>
       

        </section>
    );
};

export default Works;