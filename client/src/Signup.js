import { useState } from 'react';

const Signup = () => {
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="form-component">

            <h3 className="form-title">Get started for free</h3>

            <form className="form-body" >
                <input 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text" 
                    placeholder="Company" 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                />

                <input type="submit" value="Sign up" className="big-button" />
            </form>

        </div>
    )
}

export default Signup
