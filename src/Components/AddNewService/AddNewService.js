import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit,reset } = useForm();
      const onSubmit = data => {
        //   console.log(data);
          axios.post('https://morning-headland-08099.herokuapp.com/services',data)
            .then(res =>{
                if(res.data.insertedId){
                    alert('New Service Added!!');
                    reset();
                }
            })      
        
        }

    return (
        <div>
            <h1 className="title">Add A new Service Here</h1>


<div className="form">
    

<form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
            <br />
            <input {...register("des")} placeholder="Description"/>
            <br />
            <input {...register("img")} placeholder="Image link" />
            <br />
            <input type="number" {...register("price")} placeholder="Price"/>
            <br />
            </div>
            <input className="btn btn-secondary mt-3 ps-5 pe-5" type="submit" />
            </form> </div> 

 
    </div>
);
}


export default AddNewService;