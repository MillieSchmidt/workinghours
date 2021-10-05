import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function userLogin(credentials) {
    console.log(credentials);
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then((data) => data.json());
}

const LoginComponent = ({ setToken }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const userDetails = {
    //     username: "Millie",
    //     password: "1234"
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await userLogin({
            username,
            password
        });
        setToken(token);
        console.log(token, username, password);
    }

    return (
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}

LoginComponent.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginComponent;