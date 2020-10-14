import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faHdd,faCommentDots, faSignOutAlt,faPlus , faUserPlus  } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column   py-5 px-4" style={{ height: "100vh" }}>
            <div>
            <Link to="/">
                <img className="img-fluid w-25 mb-4" src="https://i.ibb.co/6DdQDrX/logo.png" alt=""/>
                </Link>
            </div>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/order" className="text-sidebar">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/serviceList" className="text-sidebar">
                        <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                        <Link to="/dashboard/review" className="text-sidebar">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/admin/serviceList" className="text-sidebar">
                            <FontAwesomeIcon icon={faHdd} /> <span>Service List A</span>
                        </Link>
                    </li>                  
                    <li>
                        <Link to="/dashboard/admin/addService" className="text-sidebar" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/admin/addAdmin" className="text-sidebar" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                {/* {isDoctor && <div>
                     <li>
                        <Link to="/admin/serviceList" className="text-sidebar">
                            <FontAwesomeIcon icon={faHdd} /> <span>Service List A</span>
                        </Link>
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        <Link to="/admin/addService" className="text-sidebar" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addAdmin" className="text-sidebar" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                </div>} */}
            </ul>
            <div>
                <Link to="/" className="text-sidebar"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;