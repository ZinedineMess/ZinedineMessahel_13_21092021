import ApiProvider from 'services/ApiProvider/ApiProvider';
import { logIn, setUser, logOut } from 'utils/features/userSlice';
import { useDispatch } from 'react-redux';

const LogInJWT = () => {
    const dispatch = useDispatch();

    async function logInUser() {
        const localJWToken = sessionStorage.getItem('jwtToken');
        
        if (localJWToken) {
            const response = await new ApiProvider().getUserProfile(localJWToken);

            if (response.status !== 200) {
                dispatch(logOut());
                sessionStorage.clear();
            } else {
                dispatch(logIn(localJWToken));
                dispatch(setUser(response.data.body));
            }
        }
    }
    logInUser();
}

export default LogInJWT;
