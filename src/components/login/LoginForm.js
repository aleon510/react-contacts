import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        login(username, password);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    name="username"
                    type="text" 
                    placeholder="Username"  
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name="password"
                    type="text" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;
