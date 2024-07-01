import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        axios.defaults.baseURL = 'http://localhost:8080';
        e.preventDefault();
        try {
            const response = await axios.post('user/login', {
                userName,
                password
            });
            console.log('Login successful:', response.data);
             if(response.data==="Success"){
                localStorage.setItem("token",response.data);
                navigate('/dashboard');
             }else{
                setError('Invalid email or password');
                localStorage.removeItem("token");
             }
        } catch (err) {
            setError('Invalid email or password');
            console.error('Login error:', err);
        }
    };

    return (
        <div className="login-container" style={{marginTop:'5%'}}>
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
