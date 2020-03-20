import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import axios from 'axios';

const AuthorsList = () => {

    const [authorList, setAuthorList] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res);
            setAuthorList(res.data.authors);
        })
        .catch(error => console.log(error))
    }, []);

    const Delete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                console.log(res);
                const filterList = authorList.filter(author => author._id !== id);
                setAuthorList(filterList);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Link to = "author/add"> Add an Author</Link>
            <table style = {{
                border: "1px solid black",
                width: "60vw",
                margin: "10px auto"

            }}>
                <thead style = {{
                    backgroundColor: "coral",
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "5px"
                }}>
                    <tr>
                        <th>Author Names</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {authorList.map((author, i) => (
                    <tr key={i}>
                        <td className="tableData">{author.firstName} {author.lastName}</td>
                        <td className="tableData">
                            <Link to={`/authors/view/${author._id}`}>View</Link>{" "} 
                            <Link to={`/authors/edit/${author._id}`}>Edit</Link>{" "} 
                            <button onClick={() => Delete(author._id)}>Delete</button>
                        </td>
                    </tr>    
                ))}

                </tbody>

            </table>


        </div>
    )
}

export default AuthorsList;