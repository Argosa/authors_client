import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "@reach/router";

const AuthorForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        submitted: false
    });
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {
            firstName: form.firstName, 
            lastName: form.lastName
        })
        .then(res => {
            console.log(res);
            setForm({
                firstName:"",
                lastName:"",
                submitted: true
            });
        })
        .catch(err=> console.log(err));
    };
    return (
        <div>
            <Link to= "/">Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={onSubmitHandler}>
                {form.submitted && "Your author has been added successfully!"}
                <p>
                    <label>First Name:</label><br/>
                    <input type="text" name="firstName" value={form.firstName} onChange = {(e)=>setForm({...form, [e.target.name]: e.target.value})}/>
                    {form.firstName.length > 0 && form.firstName.length < 2 && (
                        <p><span>First name must be at least two characters!</span></p>
                    )}
                </p>
                <p>
                    <label>Last Name:</label><br/>
                    <input type = "text" name="lastName" value={form.lastName} onChange = {(e) =>setForm({...form,[ e.target.name ]: e.target.value})}/>
                    {form.lastName.length > 0 && form.lastName.length < 2 && (
                        <p><span>Last name must be at least two characters!</span></p>
                    )}
                </p>
                <Link to="/"><button>Cancel</button></Link>
                <button type="submit">Submit</button>
                
            </form>
            

        </div>
        
    )
}

export default AuthorForm;