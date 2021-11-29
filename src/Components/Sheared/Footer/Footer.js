import React from 'react';
import "./Footer.css"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div >
            <div className=" footer-container">
  <div className="row">
   
    <div className="col">
      <ul>
      <h4>Quick Link</h4>
        <li><NavLink to="/" className="Link"><b>Home</b></NavLink></li>
        <li><NavLink to="/Service" className="Link"><b>Services</b></NavLink></li>
        
        
      </ul>
    </div>
                <div className="col">
      <h5>Contact us</h5>
      <form action="">
          <textarea  className="footer-area " id="" rows="3" cols="30" placeholder="your Comment" ></textarea>
          <br />
          <input className="footer-input" type="email" placeholder="your email" />     
          <br />
          <input className="footer-submit mt-2" type="submit" value="Submit" />
          
     </form>
    </div>       
  </div>
</div>
        </div>
    );
};

export default Footer;