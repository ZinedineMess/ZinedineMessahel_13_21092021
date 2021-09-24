import ApiProvider from 'services/ApiProvider/ApiProvider';
import Button from 'components/Button/Button';
import 'components/UserProfileHeader/UserProfileHeader.css';
import { connect } from 'react-redux';
import { setUser, updateUser } from 'features/userSlice';
import { useDispatch } from 'react-redux';
import React, { Fragment } from 'react';

function UserProfileHeader(props) {
    const [editName, setEditName] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [errorMsg, setError] = React.useState('');

    const dispatch = useDispatch();

    React.useEffect(() => {
        const getProfile = async (e) => {
        const response = await new ApiProvider().getUserProfile();

        if (response.status !== 200) {
            return setError('Error user : ' + response.statusText);
        }
        dispatch(setUser(response.data.body));
        setFirstName(response.data.body.firstName);
        setLastName(response.data.body.lastName);
        setError('');
    }
    getProfile().then();
    }, [dispatch]);

    async function changeUserProfile() {
        const response = await new ApiProvider().setUserProfile(firstName, lastName);
        
        if (response.status !== 200) {
            return setError('Error updating user : ' + response.statusText);
        }
        dispatch(updateUser(response.data.body));
        setEditName(false);
    }

    return (
        <section className='headerProfile'>
            {editName 
                ? (
                <Fragment>
                    <h1>Welcome back</h1>
                    {errorMsg.length > 0 && <div className='error-msg'>{errorMsg}</div>}
                    <input 
                        placeholder={firstName} 
                        type='text' 
                        className='headerProfileInput' 
                        onChange={(e)=> setFirstName(e.target.value)}
                    />
                    <input 
                        placeholder={lastName} 
                        type='text' 
                        className='headerProfileInput' 
                        onChange={(e)=> setLastName(e.target.value)}
                    />
                    <br />
                    <Button 
                        className='editButton'
                        text='Confirm'
                        action={() => changeUserProfile()}
                        />
                    <Button 
                        className='editButton' 
                        text='Cancel' 
                        action={() => setEditName(false)}
                        />
                </Fragment>
            ) : (
                <Fragment>
                    <h1>
                        Welcome back <br />
                        {props.user.firstName} {props.user.lastName}
                        {errorMsg.length > 0 && <div className='error-msg'>{errorMsg}</div>}
                    </h1>
                    <Button 
                        className='editButton' 
                        text='Edit Name' 
                        action={() => setEditName(true)}
                    />
                </Fragment>
            )}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        connected: state.user.connected,
        token: state.user.token,
        user: state.user.user,
    };
}

export default connect(mapStateToProps)(UserProfileHeader);
