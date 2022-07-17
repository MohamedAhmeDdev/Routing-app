import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const Blog = () => {
    const [user, setUsers] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }
 
    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    }
 
    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>userName</th>
                        <th>userEmail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { user.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ index + 1 }</td>
                            <td>{ user.userName }</td>
                            <td>{ user.userEmail }</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteUsers(user.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default Blog

