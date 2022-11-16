import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [userInfo,setUserInfo]=useState({
        email:'',
        password:'',
        confirmPassword:'',
    })

    const [confirmError,setConfirmError]=useState('');

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [loginUser, loginLoading, loginError] = useAuthState(auth);

      let navigate = useNavigate();
      let location = useLocation();
      
    
      let from = location.state?.from?.pathname || "/";
      if(loginUser){
        navigate(from, { replace: true });
      }


   const handleFormInput=(event)=>{
       userInfo[event.target.name]=event.target.value;
   }


   const handleSubmit=(event)=>{
            event.preventDefault();
             
            if(!login){
                if(userInfo.password!==userInfo.confirmPassword){
                    setConfirmError('Password Does not match!');
                    return;
                }
                setConfirmError('');
                createUserWithEmailAndPassword(userInfo.email,userInfo.password);
            }
            else{
                signInWithEmailAndPassword(userInfo.email,userInfo.password);
            }
   }

    return (
        <div className='container'>

            <form className='w-50 mx-auto ' onSubmit={handleSubmit}>
                <h2>{login ? 'Login' : 'Register'}</h2>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" className="form-control" id="exampleInputPassword1" name='password' />
                </div>

                {
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={(event)=>handleFormInput(event)} type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' />
                    </div>
                }
                <p className='text-danger'>{confirmError}</p>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=>setLogin(!login)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {
                    createError &&  <p className='text-danger'>{createError.message}</p>
                }


                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>

                {
                    createUser &&  <p className='text-success'>User Create Successflly</p>
                }
                {
                    user &&  <p className='text-success'>User login Successflly</p>
                }
            </form>
        </div>
    );
};

export default Login;