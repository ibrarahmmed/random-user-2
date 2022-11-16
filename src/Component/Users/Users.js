import React from 'react';
import useUsers from '../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {

   const allUsers =useUsers('https://jsonplaceholder.typicode.com/users');

    return (
        <div className='row container mx-auto'>

            {
                allUsers?.map(user=><SingleUsers
                  
                  user={user}
                  key={user.id}
                  
                  ></SingleUsers>)
            }
            
        </div>
    );
};

export default Users;