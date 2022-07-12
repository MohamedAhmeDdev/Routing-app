import React from 'react'

function Signup({closeModalSignup}) {
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
        <form>
    <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">User Name</label>
        <input type="text" className="form-control" id="exampleInputName" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
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