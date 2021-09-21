import 'components/Header/Header.css';
import { Link } from 'react-router-dom';
import logo from 'assets/logo/logo.png';
import React from 'react';

function Header() {
return (
    <header>
        <nav className='mainNav'>
            <Link to='/' className='mainNavLogo'>
                <img className='mainNavLogoImage' src={logo} alt='Argent Bank Logo' />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            <div>
                <Link to='/login' className='mainNavItem' >
                    <i className='fa fa-user-circle'></i>
                    Sign In
                </Link>
            </div>
        </nav>
    </header>
)
}

export default Header;
