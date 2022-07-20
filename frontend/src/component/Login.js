import axios from 'axios';
import React, { useContext, useState } from 'react'
import { ModuleloginContext } from '../context/ModuleLoginContext'
import './Login.css'

function Login() {
    const { setOpenModal } = useContext(ModuleloginContext)
    const[userEmail, setUserEmail] = useState('');
    const[password, setPassword] = useState('');



    const login = async (e) => {
        e.preventDefault();
       try {
       const response = await axios.post('http://localhost:5000/login',{
        userEmail: userEmail,
        password: password})
        console.log(response?.data);
        
       } catch (error) {
       
        if (error.response?.status === 401) {
            console.log("not user");
        } else if(error.response?.status === 400){
            console.log("not not accepte user");
          
        }
       }
    }



    return (
        <div className='container'>
            <div className='modal-app'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" onClick={() => setOpenModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={login}>                          
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                     <input type="password" className="form-control" id="exampleInputPassword1" value={password}  onChange={ (e) => setPassword(e.target.value) }/>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => setOpenModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login