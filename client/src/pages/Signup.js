import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSignup from '../components/NavbarSignup'
import '../css/form-pages.css';

const Signup = () => {
    const navigate = useNavigate()
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company, 
                email, 
                password,
            }),
        })

        const data = await response.json()
        if(data.status === 'ok') {
            navigate('/signin')
        }
    }
    return (
        <div className="form-page">
            <NavbarSignup />
            <div className="form-component">

                <h3 className="form-title">Get started for free</h3>
                <hr className="form-line" />
                <form className="form-body" onSubmit={registerUser}>
                    <p className="input-label">Company</p>
                    <input 
                        className="form-field"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        type="text" 
                    />
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
                 
                    <input type="submit" value="Sign up" className="big-button" />
                </form>

            </div>
        </div>
    )
}

export default Signup
