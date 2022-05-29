import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://morning-headland-08099.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])




    return (
        <div>
            <div className="banner">

                <img className='img-fluid' src="https://i.ibb.co/LSyS3X0/Best.png" alt="" />



                {/* <div className="container">
                    <div className="row">
                    <div className="titel col-lg-6">
                            <h1>Make your Vacation </h1>
                            <h1>More Memorable</h1>
                            <p>“Never go on trips with anyone you do not love.” – Ernest Hemingway</p>
                    </div>  
                    <div className="col-lg-6 img-fluid">
                       <img src="https://i.ibb.co/LSyS3X0/Best.png" alt="" />
                    </div>
                    
                </div>
                </div> */}
            
            </div>
     


                <div className="mt-5">
                    <h1 className="text-center"> Our Services</h1>
                    <hr />
                 </div>


         <div className="container ">
             <div className="row">
                 {
                     services.map(service => (
                       
                             <div className="col-lg-4">
                             <div className="card m-3 pt-3 card-body">
                                 <div className="img-container img-fluid  ms-3 ">
                                     <img src={service.img} alt="" />                                     
                                 </div>
                                <div className="des p-3">
                                    <h5>Service Name</h5> <hr />
                                      <h1>{service.name}</h1>
                                      <h4>Cost: {service.price} taka</h4>
                                      
                                    
                                    <Link to={`/placeOrder/${service._id}`}>
                                    <button className="learn-more"  >Learn More</button>
                                    </Link>
                                </div>
                            </div>
                         </div>
                       
                     ))
                 }
             </div>
         </div>


{/* About Us  */}

          <div className="container aboutUs mt-5 p-5 mb-5">
             <div><h1 >About Us</h1> <hr /></div> 
            <div>
            <h3 className="text-danger text-start">Best Trip</h3>
               
            <p className='container'>
        Since 1975, <span className="text-danger"> ‘Best Trip’ </span> has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.

        We’re a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit.

        Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages. <br />

        Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Los Angeles County. Our administration is dynamic on different tourism warning sheets and panels for movement associations. <br />

        Travel magazines real inn brands, and that are only the tip of the iceberg. ‘Organization Name’ is a Premium Member of ASTA (American Society of Travel Advisors), and also an ASTA Green Member office, and CLIA (Cruise Line International Association). <br />

        Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer’s needs each day. That is additionally our guarantee.
        </p>
        </div>
        </div>



{/* Contact us  */}

<div className="container">
<div className="">
    <h1>Contact Us</h1> <hr />
</div>

    <div>
    <h3 className="text-start text-danger">24 x 7 Customer Helpline</h3>
    <div className="row border aboutUs m-5 p-5">
        <div className="col-lg-6">
            <h3>Phone Number</h3>
            <hr />
        <h4>Phone : 01XXXXXXXXX</h4>
        <h4>Phone : 01XXXXXXXXX</h4>
        <h4>Phone : 01XXXXXXXXX</h4>
        </div>
        <div className="col-lg-6">
            <h3>Email Us</h3>
            <hr />
                 <h4>Email: contact1@besttrip.com</h4>
                 <h4>Email: contact2@besttrip.com</h4>
                 <h4>Email: contact3@besttrip.com</h4>

        </div>
    </div>
    <hr />
    </div>
</div>








                      

                 

        </div>


    );
};

export default Home;