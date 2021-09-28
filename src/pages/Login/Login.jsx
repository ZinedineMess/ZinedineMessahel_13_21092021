import LoginForm from 'components/LoginForm/LoginForm';
import 'pages/Login/Login.css';
import React from 'react';

function Login() {
    return (
        <main className='main backgroundDark'>
            <section className='signInContent'>
                <i className='fa fa-user-circle signInIcon'></i>
                <h1>Sign In</h1>
                <LoginForm />
            </section>
        </main>
    );
}

export default Login;
