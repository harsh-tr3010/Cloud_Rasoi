import React, {useState} from 'react';
import axios from 'axios';

const Caters = () => {
    const [employee, setEmployee] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        country: '',
        pincode: ''


    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEmployee({
            ...employee,[name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/cate', employee)
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
                <label>firstname:</label>
                <input type='text' name='name' value={employee.name} onChange={handleChange} />
            </div>
            <div>
                <label>lastname:</label>
                <input type='text' name='age' value={employee.age} onChange={handleChange} />
            </div>
            <div>
                <label>phone:</label>
                <input type='tel' name='phone' value={employee.phone} onChange={handleChange} />
            </div>
            <div>
                <label>email:</label>
                <input type='text' name='email' value={employee.email} onChange={handleChange} />
            </div>
            <div>
                <label>city:</label>
                <input type='text' name='city' value={employee.city} onChange={handleChange} />
            </div>
            <div>
                <label>state:</label>
                <input type='text' name='state' value={employee.state} onChange={handleChange} />
            </div>
            <div>
                <label>country:</label>
                <input type='text' name='country' value={employee.country} onChange={handleChange} />
            </div>
            <div>
                <label>pincode:</label>
                <input type='text' name='pincode' value={employee.pincode} onChange={handleChange} />
            </div>
            <button type='submit'>Add Caterer</button>
        </form>
        
    );
};

export default Caters;