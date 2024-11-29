// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Welcome extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//         firstname: 'asldfj',
//         lastname: 'slkdfjl',
//         phone: '098989809',
//         email: 'asdkfjls@fjalsdjf',
//         city: ';askdf;',
//         state: 'sdfs',
//         country: 'sdf',
//         pincode: '3e3'
//         }

//     }

//     componentDidMount(){
//         // alert("rr");
//         axios.post("http://localhost:3000/discate")
//         .then(response => {
//             console.log( response.data);
//             this.setState(
//             ...this.state,...response.data
//             )
//         })

        
//         .catch(error => {
//             console.error('There was an error adding the employee: ', error);
//         });
//         console.log(this.state.firstname)
//     }

    
//   render() {
//     return (
//       <div>
//         <h1>Welcome</h1>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {employees.map(employee=>(
//                     <tr key={employee.id}>
//                         <td>{employee.id}</td>
//                         <td>{employee.id}</td>
//                         <td>{employee.id}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

        
          
//             {/* {this.state.firstname}
//             {this.state.lastname}{this.state.phone}{this.state.email}{this.state.city}{this.state.state}{this.state.country}{this.state.pincode} */}
        
//       </div>
//     )
//   }
// }


import React from 'react'

export default function Welcome() {
  return (
    <div>
      
    </div>
  )
}
