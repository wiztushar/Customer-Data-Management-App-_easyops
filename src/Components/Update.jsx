import React,{ useState } from 'react'
import Swal from 'sweetalert2';


function Update({users, selectedUser, setUsers, setEdit }) {
    const id = selectedUser.id;

    const [firstName, setFirstName] = useState(selectedUser.firstName);
    const [contact, setcontact] = useState(selectedUser.contact);
    const [email, setEmail] = useState(selectedUser.email);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !contact || !email ) {
           
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        
        }
        if(isNaN(contact)){
            return Swal.fire({
                icon:'error',
                title:'Error',
                text:'Phone Number must be Numeric .',
                showConfirmButton:'true'
                
            });
        }
        if(contact.length!==10){

        return Swal.fire({
            icon:'error',
            title:'Error',
            text:'Phone Number should be of 10 digits .',
            showConfirmButton:'true'
            
        });
        }


        const employee = {
            id,
            firstName,
            contact,
            email,
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1, employee);
                break;
            }
        }

        setUsers(users);
        setEdit(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `Data updated Successfully.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="contact">Last Name</label>
                <input
                    id="contact"
                    type="text"
                    name="contact"
                    value={contact}
                    onChange={e => setcontact(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setEdit(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Update