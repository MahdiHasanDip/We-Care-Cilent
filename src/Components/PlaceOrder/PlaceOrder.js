import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./PlaceOrder.css"
import useFirebase from '../Hooks/useFirebase';

const PlaceOrder = () => {
    const {id} = useParams();
    const {user} = useFirebase();
    
    const [allServices , setAllServices] = useState([])
    const [singleService , setSingleService] = useState({})
    
    useEffect(() => {
        fetch('https://morning-headland-08099.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
        
    }, [])
    
    useEffect(()=>{
        const oneService = allServices.find(service=>service._id==id)
        setSingleService(oneService)
        
    },[allServices])
    
    
    const handleAddToCart = () =>{
        console.log("clicked");
        console.log(user.email);
        const data = singleService;
       data.email = user.email;
        
        

        axios.post('https://morning-headland-08099.herokuapp.com/cart',data)
            .then(res =>{
                if(res.data.insertedId){
                    alert('New Service Added to cart!!');
                    
                }
            })
    }
        
         
    
    
    
        return (
            <div>
               <div className="place-order">
               <div className="container">
                    <img className="detail-img" src={singleService?.img} />
                </div>
                <div className="text-center mt-5 ">
                    <h1>Trip Name: {singleService?.name}</h1>
                    <hr />
                    <hr />
                    
                   <div className='serviceDes' > <h4 className="text-center mt-5"> {singleService?.des}</h4></div>
                    {/* <Link to ='/myOrders'> */}
                    <button  onClick={handleAddToCart} className="mt-5 btn btn-secondary">Add To Cart</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
                
        );
};


export default PlaceOrder;