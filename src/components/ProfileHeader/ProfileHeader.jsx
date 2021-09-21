import Button from 'components/Button/Button';
import 'components/ProfileHeader/ProfileHeader.css';
import React from 'react';

function ProfileHeader() {
    return (
        <div className='headerProfile'>
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <Button className='editButton' text='Edit Name'/>
        </div>
    )
}

export default ProfileHeader;
