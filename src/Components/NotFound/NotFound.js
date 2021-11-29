import React from 'react';
import './NotFound.css'

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="">
                
             {/* Not Found  */}
            <img src="https://i.ibb.co/Lnsb75B/404-not-found.jpg" alt="" />
             <div className="notfoundText">  
            <div className="">
            <h1>Sorry....Page Not Found</h1>
             <Link to ="/"><button className="btn btn-primary">Back To Home</button></Link>
            </div>
             </div>
            </div>
        </div>
    );
};

export default NotFound;