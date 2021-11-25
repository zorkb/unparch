import { useState } from 'react';
import Navbar from './Navbar'
import './form-pages.css';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signInUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:4000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, 
                password,
            }),
        })

        const data = await response.json()
        console.log(data);
    }
    return (
        <div className="form-page">
            <Navbar />
            <div className="form-component">

                <h3 className="form-title">Get started for free</h3>
                <hr className="form-line" />
                <form className="form-body" onSubmit={signInUser}>
                    
                    <p className="input-label">Email</p>
                    <input 
                        className="form-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                    />

                    <p className="input-label">Password</p>
                    <input 
                        className="form-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                    />
                 
                    <input type="submit" value="Sign in" className="big-button" />
                </form>

            </div>
        </div>
    )
}

export default SignIn