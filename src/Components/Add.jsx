import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ users, setUsers, setAdd }) {

    const [firstName, setFirstName] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setEmail] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
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

        const id = users.length + 1;
        const newUser = {
            id,
            firstName,
            contact,
            email
        }
        users.push(newUser);
        setUsers(users);
        setAdd(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `Data added Successfully..`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="contact">Contact</label>
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setAdd(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add