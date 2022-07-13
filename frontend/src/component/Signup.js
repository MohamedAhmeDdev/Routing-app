import React from 'react'
import axios from "axios"
import { useState } from 'react'
import  { useNavigate } from 'react-router-dom';


function Signup({closeModalSignup}) {
        const [userName, setUserName] = useState('');
        const [userEmail, setUserEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
     
        const saveUser = async (e) => {
            e.preventDefault();
            await axios.post('http://localhost:5000/users',{
                userName: userName,
                userEmail: userEmail,
                password: password
            });
            navigate("/");
        }
    
  return (
    <div className='container'>
    <div className='modal-app'>
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">SignUp</h5>
            <button type="button" onClick={() => closeModalSignup(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form onSubmit={saveUser}>
    <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">User Name</label>
        <input type="text" className="form-control" id="exampleInputName" value={userName}   onChange={ (e) => setUserName(e.target.value) } />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userEmail}  onChange={ (e) => setUserEmail(e.target.value) }/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password}  onChange={ (e) => setPassword(e.target.value) }/>
    </div>
    <button type="submit" className="btn btn-primary ">Submit</button>
    </form>
        </div>
        <div className="modal-footer">
            <button type="button" onClick={() => closeModalSignup(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Signup