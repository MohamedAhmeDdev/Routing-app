import React from 'react'
import axios from "axios"
import { useState } from 'react'
import  { useNavigate } from 'react-router-dom';
import '../App.css'


function Signup({closeModalSignup}) {
        const [userName, setUserName] = useState('');
        const [userEmail, setUserEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(false)
        const navigate = useNavigate();
     
        const signUp = async (e) => {
            e.preventDefault();
            if(userName.length===0 || userName.length<= 10 && userEmail.length===0 && password.length===0 || password.length<= 5){
              setError(true)
            }
            else if(
              await axios.post('http://localhost:5000/users',{
                userName: userName,
                userEmail: userEmail,
                password: password
            }) ) {
              closeModalSignup(false)
            }
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
                 <form onSubmit={signUp}>

                            <label htmlFor="exampleInputName" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="exampleInputName" value={userName}   onChange={ (e) => setUserName(e.target.value) } />
                            {error&&userName.length<=10? <p className='error'>userName can't be Empty or less than 10 xracter </p>:""}

                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userEmail}  onChange={ (e) => setUserEmail(e.target.value) }/>
                            {error&&userEmail.length<=10? <p className='error'>useremail can't be Empty</p>:""}

                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password}  onChange={ (e) => setPassword(e.target.value) }/>
                            {error&&password.length<=10? <p className='error'>password can't be Empty or less than 5 digits </p>:""}

                        <button type="submit"  className="btn btn-primary">Submit</button>
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




// import React, { useState } from "react";

// function Form(){
//     const [firstName,setFirstName]=useState('')
//     const [lastName,setLastName]=useState('')
//     const [error,setError]=useState(false)

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(firstName.length==0){
//             setError(true)
//         } if(lastName.length==0);{
//             setError(true)
//         }
      

//     }
//     return(
//         <>
//            <form onSubmit={handleSubmit}>
//                <div>
//                    <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
//                </div>
//                {error&&firstName.length<=0?
//                <label>First Name can't be Empty</label>:""}
//                <div>
//                    <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
//                </div>
//                {error&&lastName.length<=0?
//                <label>Last Name can't be Empty</label>:""}
//                <div>
//                    <button>
//                        Submit
//                    </button>
//                </div>
//            </form>
//         </>
//     );
// }
// export default Form;