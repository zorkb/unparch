import { useState } from 'react';
import NavbarSignIn from '../components/NavbarSignIn';
import '../css/form-pages.css';

function SignIn() {
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

        if(data.user) {
            console.log('login worked')
            window.location.href='/userhome'
        } else {
            alert('Please check your email and password')
        }
        console.log(data);
    }
    return (
        <div className="form-page">
            <NavbarSignIn />
            <div className="form-component">

                <h3 className="form-title">Sign into your account</h3>
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