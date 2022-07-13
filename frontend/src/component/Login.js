import React, { useContext } from 'react'
import { ModuleloginContext } from '../context/ModuleLoginContext'
import './Login.css'

function Login() {
   const {setOpenModal} = useContext(ModuleloginContext)

  return (
    <div className='container'>
    <div className='modal-app'>
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" onClick={() =>setOpenModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
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