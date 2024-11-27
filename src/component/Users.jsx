import { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const loadedusers = useLoaderData();
    const [users, setUsers] = useState(loadedusers)

const handleDelete=(_id)=>{
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {

        method: 'DELETE',

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            alert('Deleted Successfully');
            const remaining = users.filter(user=> user._id !== _id);
            setUsers(remaining);
        }
    })



}

    return (
        <div>
            <h2>Numbers of user:{users.length}</h2>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name}: {user.email}  
                    <button onClick={()=>handleDelete(user._id)} >x</button></p> )
                }
            </div>
        </div>
    );
};

export default Users;