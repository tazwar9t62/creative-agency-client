import React from 'react';
import { useSpring, animated } from 'react-spring'


const ServiceDetails = ({service}) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1] ;
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})` ;
const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <animated.div   onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans), cursor:"pointer" }}
       className="col-md-4 text-center  ">
           <div style={{height:"300px"}} className="m-3 shadow p-5">
           <img style={{height:"50px"}} src={`data:img/png;base64,${service.img.img}`} alt=""/>
            <h5 className="my-3">{service.title}</h5>
            <p className="text-
            muted">{service.description}</p>
             </div>
        </ animated.div>
    );
};

export default ServiceDetails;