import { ACCOUNTS_CONTENT } from 'utils/data/data';
import Card from 'components/Card/Card';
import UserProfileHeader from 'components/UserProfileHeader/UserProfileHeader';
import React from 'react';

const Profile = () => {
    return (
        <main className='main backgroundDark'>
            <UserProfileHeader />
            <h2 className='sr-only'>Accounts</h2>
            {ACCOUNTS_CONTENT.map(({ id, title, amount, description }) => (
                    <Card
                        key = {id}
                        title = {title}
                        amount = {amount}
                        description = {description}
                    />
                ))}
        </main>
    );
}

export default Profile;
