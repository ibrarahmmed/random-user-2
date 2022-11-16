import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {

    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');

    const size=4;
    const userdata=usersData.slice(0,size);


    return (
        <div className='container'>
            <h1>total users :{userdata.length}</h1>

           <div className='row'>
           {
                userdata?.map(user=><SingleUsers
                
                user={user}
                key={user.id}
                
                ></SingleUsers>)
            }

           </div>

           <Link className='btn btn-info w-25 mx-auto text-center d-flex justify-content-center mb-4' to='/users'>Load more...</Link>

        </div>
    );
};

export default Home;