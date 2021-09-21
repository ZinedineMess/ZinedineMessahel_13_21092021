import Button from 'components/Button/Button';
import 'components/LoginForm/LoginForm.css';
import { Link } from 'react-router-dom';
import React from 'react';

function LoginForm() {
    return (
        <form>
            <div className='inputWrapper'>
                <label htmlFor='username'>Username</label><input type='text' id='username' />
            </div>
            <div className='inputWrapper'>
                <label htmlFor='password'>Password</label><input type='password' id='password' />
            </div>
            <div className='inputRemember'>
                <input type='checkbox' id='remember-me' /><label htmlFor='remember-me'>Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <Link to='/profile'>
                <Button className='signInButton' text='Sign In'/>
            </Link>
            {/* <!-- SHOULD BE THE BUTTON BELOW -->
            <!-- <button className='sign-in-button'>Sign In</button> -->
            <!--  --> */}
        </form>
    )
}

export default LoginForm;
