import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
            
            <div className="mom-div"> 
            <form onSubmit={handleSubmit} className="form-login">
                <label htmlFor="email" className="lblM">Email</label><br></br>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" name="email" id="email" /><br></br>
                <label htmlFor="password" className="lblP">Password</label><br></br>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} name="password" id="password" placeholder="*******"/><br></br>
                <button type="submit" className="btn-login">Login</button>
                <button onClick={() => props.onFormSwitch('register')} className="register-btn">  Don't you have an account? Register here</button>
            </form>
            </div>
            
        
    )
}