import React, {useState, useEffect} from "react";
import axios from "axios";
import './Deliverydb.css';
const Deliverydb=()=>{
    const [employees,setEmployees,]=useState([]);
    const [caterers,setCaterers,]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:3000/delivery")
        .then(response=>{setEmployees(response.data)}
        )
        .catch(error=>{
            console.error("there was an error fetching the employee details",error)
        })
   } ,[]);

   useEffect(()=>{
    axios.get("http://localhost:3100/catering")
    .then(response=>{setCaterers(response.data)}
    )
    .catch(error=>{
        console.error("there was an error fetching the employee details",error)
    })
} ,[]);


   return(
<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    <div className="">
    <h1>Delivery boy List</h1>

    <div className="main-div _md1">
        {employees.map(a1=>(
        <div className="boxessection _bs10">
            <div className="firstentry _fe01" key={a1.id}>
                <div className="img _ig100"><i class="fa-solid fa-user _fus12"></i></div>
                <div className="firstbox">
                    <div className="name">{a1.name}</div>
                    <div className="name">{a1.phone}</div>
                    <div className="name">{a1.address}</div>
                    <div className="name">{a1.gender}</div>
                </div>
            </div>
        </div>
        ))}

        <h1>Halwai List</h1>
        {caterers.map(a2=>(
        <div className="boxessection _bs10">
            <div className="firstentry _fe01" key={a2.id}>
                <div className="img _ig100"><i class="fa-solid fa-user _fus12"></i></div>
                <div className="firstbox">
                    <div className="name">{a2.name}</div>
                    <div className="name">{a2.phone}</div>
                    <div className="name">{a2.email}</div>
                    <div className="name">{a2.category}</div>
                </div>
            </div>
        </div>
        ))}
    </div>
    </div>
    </>
   )
}
export default Deliverydb;