import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../Hook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const UserInfo = () => {
    const {userId}=useParams();

    const singleUser=useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    console.log(singleUser[0]);

    return (
        <div className='container mx-auto d-flex justify-content-center py-2'>
            <SingleUsers user={singleUser[0]}>

                {
                    {email:singleUser[0]?.email,phone:singleUser[0]?.phone}
                }

            </SingleUsers>
        </div>
    );
};

export default UserInfo;