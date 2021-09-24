import ApiProvider from 'services/ApiProvider/ApiProvider';
import Button from 'components/Button/Button';
import 'components/LoginForm/LoginForm.css';
import { logIn } from 'features/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function LoginForm() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    // call ApiProvider 
    let apiProvider = new ApiProvider();
    // useHistory
    let history = useHistory();
    // Reducers
    const dispatch = useDispatch();

    // Login 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const response = await apiProvider.userLogin(userName, password);

        if (userName.length === 0 || password.length === 0) {
            return setErrorMessage('Please fill in all fields');
        }
        if (response.status !== 200) {
            return setErrorMessage(response.message);
        }
        dispatch(logIn(response.data.body.token));
        history.push('/profile');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='inputWrapper'>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    autoComplete="current-username"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
            </div>
            <div className='inputWrapper'>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div className='inputRemember'>
                <input 
                    type='checkbox' 
                    id='remember-me' 
                />
                <label htmlFor='remember-me'>Remember me</label>
            </div>
            <span className="errorMessage">{errorMessage}</span>
            <Button className='signInButton' text='Sign In'/>
        </form>
    )
}

export default LoginForm;
