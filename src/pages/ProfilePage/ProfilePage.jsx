import { ACCOUNTS_CONTENT } from 'data/data';
import Card from 'components/Card/Card';
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';
import React from 'react';

function ProfilePage() {
    return (
        <main className='main backgroundDark'>
            <ProfileHeader />
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
    )
}

export default ProfilePage;
