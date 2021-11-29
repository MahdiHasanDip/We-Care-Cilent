import React, { useEffect, useState } from 'react';


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://morning-headland-08099.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

// Delete Service 
    const handleDelete = (id) =>{

   const confirmation = window.confirm('Are you sure,want to delete?');
     if(confirmation){
                    // console.log(id);
                    fetch(`https://morning-headland-08099.herokuapp.com/services/${id}`,{
                        method:'DELETE'
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if (data.deletedCount>0){
                            alert("Service Deleted")
                        }
                    })
                }

    }


    return (
        <div>
            <h1>All Services</h1>

            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price</th> 
                    <th scope="col">Action</th>                    
                </tr>
            </thead>
            <tbody>
            {
              services.map(service => (
                    <tr key={service._id}>
                        <th scope="row">#</th>
                        <td><h3>{service.name}</h3></td>
                        <td>{service.price}</td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(service._id)}>Delete</button></td>
                    </tr>
              ))
            }
            </tbody>
            </table>

        </div>
    );
};

export default Services;

