import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container">
                <Link className="navbar-brand" to="/">Random User</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link " aria-current="page" to="/home">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/users">Users</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/login">Login</CustomLink>
                        </li>
                    </ul>
                    <span className="navbar-text ">
                        {!user? 'USER':<span >{user?.email}<button onClick={()=>signOut(auth)}  type="button" class="btn btn-light mx-2">Sign Out</button></span>}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;