import React, { useState,useEffect} from 'react';


const AllOrder = () => {


 
  const [orders, setOrders] = useState([]);



  useEffect(() =>{
      fetch('https://morning-headland-08099.herokuapp.com/cart')
      .then(res => res.json())
      .then(data => setOrders(data))
  },[])



// delete 
const handleDelete = (id) =>{

  const confirmation = window.confirm('Are you sure,want to delete?');
    if(confirmation){
                   console.log(id);
                   fetch(`https://morning-headland-08099.herokuapp.com/cart/${id}`,{
                       method:'DELETE'
                   })
                   .then(res => res.json())
                   .then(data =>{
                       if (data.deletedCount>0){
                           alert("Order Deleted")
                       }
                   })
               }

   }








    return (
        <div>
          <div>
          <h1>  Total order  {orders?.length}</h1>
          </div>


          <div>
                          <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                              </tr>
                            
                            </thead>
                            <tbody>
                              
                              {
                              orders?.map(order =>  <tr>
                                <th scope="row">#</th>
                                <td><h3>{order?.name}</h3></td>
                                <td>{order?.price}</td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(order._id)}>Delete</button></td>
                              </tr>)
                            }
                               
                              

                            </tbody>
                          </table>


          </div>





        </div>
    );
};

export default AllOrder;