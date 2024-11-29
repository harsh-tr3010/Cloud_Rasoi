import React, {useState, useEffect} from "react";
import axios from "axios";

const Rasoidemo=()=>{
    const [employees,setEmployees]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:3000/rasoi")
        .then(response=>{setEmployees(response.data)}
        )
        .catch(error=>{
            console.error("there was an error fetching the employee details",error)
        })
   } ,[]);


   return(
    <div>
        {/* <h1>Employee List</h1> */}
        <table>
            
            <tbody>
                {employees.map(a1=>(
                    <tr key={a1.id}>
                        <td>{a1.rasoi_name}</td>
                        <td>{a1.rasoi_rating}</td>
                        <td>{a1.rasoi_category}</td>
                        <td>{a1.rasoi_address}</td>
                        <td>{a1.rasoi_time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
   )
}
export default Rasoidemo;