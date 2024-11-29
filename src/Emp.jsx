import React, {useState} from 'react';
import axios from 'axios';

const Emp = () => {
    const [employee, setEmployee] = useState({
        id:'',
        name: '',
        age: '',
        sal: '',
        phone: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEmployee({
            ...employee,[name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/emp', employee)
            .then(response => {
                console.log("Employee added successfully:", response.data);
            })
            .catch(error => {
                console.error('There was an error adding the employee: ', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' name='name' value={employee.name} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type='text' name='age' value={employee.age} onChange={handleChange} />
            </div>
            <div>
                <label>Sal:</label>
                <input type='text' name='sal' value={employee.sal} onChange={handleChange} />
            </div>
            <div>
                <label>Phone:</label>
                <input type='tel' name='phone' value={employee.phone} onChange={handleChange} />
            </div>
            <button type='submit'>Add Employee</button>
        </form>
    );
};

export default Emp;