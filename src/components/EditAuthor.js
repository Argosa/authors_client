import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link} from "@reach/router";


const EditAuthor = (props) => {

        const [edit, setEdit] = useState({
            firstName: "",
            lastName: "",
        });

        useEffect(() => {
            axios.get(`http://localhost:8000/api/authors/${props.id}`)
                .then(res => {
                    console.log(res);
                    setEdit(res.data.author);
                })
                .catch(err=> console.log(err))
        }, []);

        const onSubmitHandler = e => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/authors/update/${props.id}`, {
                firstName: edit.firstName, 
                lastName: edit.lastName
            })
            .then(res => {
                console.log(res);
                setEdit({
                    ...edit,
                    submitted: true
                });
            })
            .catch(err=> console.log(err));
        };
        return (
            <div>
                <Link to= "/">Home</Link>
                <h3>Edit this Author:</h3>
                
                <form onSubmit={onSubmitHandler}>
                    {edit.submitted && "Your author has been updated!"}
                    <p>
                        <label>First Name:  </label><br/>
                        <input type="text" name="firstName" value={edit.firstName} onChange = {(e)=>setEdit({...edit, [e.target.name]: e.target.value})}/>
                        {edit.firstName.length > 0 && edit.firstName.length < 2 && (
                            <p><span>First name must be at least two characters!</span></p>
                        )}
                    </p>
                    <p>
                        <label>Last Name:</label><br/>
                        <input type = "text" name="lastName" value={edit.lastName} onChange = {(e) =>setEdit({...edit,[ e.target.name ]: e.target.value})}/>
                        {edit.lastName.length > 0 && edit.lastName.length < 2 && (
                            <p><span>Last name must be at least two characters!</span></p>
                        )}
                    </p>
                    <Link to="/"><button>Cancel</button></Link>
                    <button type="submit">Update</button>
                    
                </form>
                
    
            </div>
            
        );
    };


export default EditAuthor;