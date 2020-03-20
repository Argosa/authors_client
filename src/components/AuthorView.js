import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link} from "@reach/router";


const ViewAuthor = (props) => {

        const [view, setView] = useState({
            firstName: "",
            lastName: "",
        });

        useEffect(() => {
            axios.get(`http://localhost:8000/api/authors/${props.id}`)
                .then(res => {
                    console.log(res);
                    setView(res.data.author);
                })
                .catch(err=> console.log(err))
        }, []);

      
        return (
            <div>
                <Link to= "/">Home</Link>
                <h3>Author:</h3>
               <h1>Name:  {view.firstName} {view.lastName} </h1>
            </div>
            
        );
    };

export default ViewAuthor;