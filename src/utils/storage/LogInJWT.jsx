import ApiProvider from 'services/ApiProvider/ApiProvider';
import { logIn, setUser } from 'redux/features/userSlice';
import { useDispatch } from 'react-redux';

const LogInJWT = () => {
    const dispatch = useDispatch();
    const jwtToken = localStorage.getItem('jwtToken');

    async function logInUser(jwtToken) {
        const response = await new ApiProvider().getUserProfile(jwtToken);
    
        if (response.status === 200) {
            dispatch(setUser(response.data.body));
            dispatch(logIn(jwtToken));
        }
    }

    if (jwtToken) {
        logInUser(jwtToken);
    }
}

export default LogInJWT;
