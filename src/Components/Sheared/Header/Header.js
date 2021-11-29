import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const {user,handleLogout}= useFirebase();
    return (

        
         <div className="header">
                      
                <div className="row">
                            <div className="col-sm col-lg-2">
           <h1 >Best <span className='text-danger'>Trip</span> </h1>
            </div>
            <div className="col-sm col-lg-10">
            <div className="">
            <ul className='Nav-link'>
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "blue" ,textDecoration:"none" }} to="/" className="Link">Home</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "blue" ,textDecoration:"none" }} to="/myCart" className="Link">My Orders</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "blue" ,textDecoration:"none" }} to="/allOrders" className="Link">Manage All Orders</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "blue" ,textDecoration:"none" }} to="/Service" className="Link">All Services</NavLink></li> 
                    <li><NavLink activeStyle={{fontWeight: "bold", color: "blue" ,textDecoration:"none" }} to="/addNewService" className="Link">Add Services</NavLink></li> 
                   <li> { user.email 
                    ?
                    <span>{user.displayName}</span>
                    :
                    <p></p>
                    }  </li>
                   <li> {
                    user.email 
                    ?
                    <button className="btn btn-danger" onClick={handleLogout}>Log Out</button> 
                    :
                    <li><NavLink to="/login" className="login-btn">Login</NavLink></li>
                    } </li>
        
                </ul>
            </div> 
    </div>
    
  </div>
</div>

















       
             );
};

      

export default Header;