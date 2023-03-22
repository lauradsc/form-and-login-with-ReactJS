import React, { useState } from 'react';

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(name);
    }

    return (
        
        <div className="mom-div"> 
        <form onSubmit={handleSubmit} className="register-form">
            <label htmlFor="name" className="lblN"> Your name</label><br></br>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="for example: Paulo Costa"/><br></br>
            <label htmlFor="email" className="lblM">Email</label><br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" name="email" id="email" /><br></br>
            <label htmlFor="password" className="lblP">Password</label><br></br>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} name="password" id="password" placeholder="*******"/>
            <button type="submit" className="btn-register">Register</button>
            <button onClick={() => props.onFormSwitch('login')} className="register-btn"> Already have an account? login here.</button>

        </form>
        
    </div>
    )
}

