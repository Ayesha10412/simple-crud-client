import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const handleUpdate=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)
        const updateUser = {name,email}

fetch(`http://localhost:5000/users/${loadedUser._id}`,{
    method: 'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateUser),

})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
        alert('Updated successfully!!')
    }
})

    }




    return (
        <div>
            <h1>Update Information of {loadedUser.name}</h1>

            <form onSubmit={handleUpdate} >
                <input type="text" name='name' defaultValue={loadedUser?.name} /><br />
                <input type="email" name='email' defaultValue={loadedUser?.email} /><br />
                <input  type="submit" value='update' />


            </form>


        </div>
    );
};

export default Update;