import ApiProvider from 'services/ApiProvider/ApiProvider';
import Button from 'components/Button/Button';
import 'components/LoginForm/LoginForm.css';
import Input from 'components/Input/Input';
import { logIn } from 'utils/features/userSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let history = useHistory();
    const dispatch = useDispatch();

    /**
     * Send the data to the ApiProvider, which will execute a POST request to the ArgentBank API on Submit
     * If the authentication is correct the user is redirected to his '/profile' page
     * If the fields are empty or if the response status is not equal to 200 an error message appears
     * @param {object} e Event
     * @return {void}
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        // Send POST request
        const response = await new ApiProvider().userLogin(userName, password);

        if (userName.trim().length === 0 || password.length === 0) {
            return setErrorMessage('Please fill in all fields');
        }
        if (response.status !== 200) {
            return setErrorMessage(response.message);
        }
        
        dispatch(logIn(response.data.body.token));
        history.push('/user/profile');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='inputWrapper'>
                <label htmlFor='username'>Username</label>
                <Input 
                    className="username"
                    type='text' 
                    autoComplete="current-username"
                    value={userName}
                    action={(e) => {setUserName(e.target.value)}}
                />
            </div>
            <div className='inputWrapper'>
                <label htmlFor='password'>Password</label>
                <Input 
                    className="password"
                    type='password' 
                    autoComplete="current-username"
                    value={password}
                    action={(e) => {setPassword(e.target.value)}}
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
    );
}

export default LoginForm;
