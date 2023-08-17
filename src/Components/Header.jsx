import React from 'react'

function Header({ setAdd }) {
    return (
        <header>
            <h1>User Data Manager</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setAdd(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default Header