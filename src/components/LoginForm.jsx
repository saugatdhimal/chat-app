import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObj = { 'Project-ID': "31b6097f-2d1b-4617-b7b6-135e7192a7d1", 'User-Name': username, 'User-Secret': password};
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObj });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch(error){
            setError("Incorrect Username or Password..")
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" required/>
                    <input className="input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required/>
                    <div align="center">
                        <button className="button" type="submit">
                            <span>
                                Let's Chat
                            </span>
                        </button>
                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;