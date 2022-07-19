import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const Contactss = () => {
    const [login, setLogin] = useState([]);
 
    useEffect(() => {
        getLogin();
    }, []);
 
    const getLogin = async () => {
        const response = await axios.get('http://localhost:5000/login');
        setLogin(response.data);
    }
 
    const deleteLogin = async (id) => {
        await axios.delete(`http://localhost:5000/login/${id}`);
        getLogin();
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
                    { login.map((login, index) => (
                        <tr key={login.id }>
                            <td>{ index + 1 }</td>
                            <td>{ login.userEmail }</td>
                            <td>{ login.password }</td>
                            <td>
                                <Link to={`/edit/${login.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteLogin(login.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default Contactss

