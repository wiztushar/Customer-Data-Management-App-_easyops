import React, { useState } from 'react'
import { UsersData } from '../User_data'
import Swal from 'sweetalert2'
import List from './List'
import Header from './Header'
import Update from './Update'
import Add from './Add'


function Dashboard() {

    const[users,setUsers]=useState(UsersData)
    const[selectedUser,setSelectedUser]=useState(null)
    const[isAdd,setAdd]=useState(false);
    const[isEdit,setEdit]=useState(false);

    const handleEdit=(id)=>{
        const [user] = users.filter(user => user.id === id);

        setSelectedUser(user);
        setEdit(true);
    }

    const handleDelete=(id)=>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [user] = users.filter(user => user.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${user.firstName} 's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setUsers(users.filter(user => user.id !== id));
            }
        });
        
    }


  return (

    <div className='container'>
          {!isAdd && !isEdit && (
                <>
                    <Header
                        setAdd={setAdd}
                    />
                    <List
                        users={users}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdd && (
                <Add
                    users={users}
                    setUsers={setUsers}
                    setAdd={setAdd}
                />
            )}
            {/* Edit */}
            {isEdit && (
                <Update
                    users={users}
                    selectedUser={selectedUser}
                    setUsers={setUsers}
                    setEdit={setEdit}
                />
            )}
    
    </div>
    
  )
}

export default Dashboard