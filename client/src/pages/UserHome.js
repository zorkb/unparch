import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const UserHome = () => {
    const navigate = useNavigate()

    async function populateWells() {
        const req = await fetch('http://localhost:4000/api/wells', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = req.json()
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if(!user) 
                localStorage.removeItem('token')
                navigate('/signin')
            } else {
                populateWells()
            }
        }, [])
    
    return (
        <div className="user-home">
            <h1>WELLS</h1>
        </div>
    )
}

export default UserHome