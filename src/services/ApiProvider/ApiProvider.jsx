import axios from 'axios';
import { 
    API_URL_USER_LOGIN,
    API_URL_USER_PROFILE 
} from 'utils/constants/constants';

class ApiProvider {
    userLogin(login, password) {
        return axios
            .post(API_URL_USER_LOGIN, {
                email: login,
                password: password,
            })
            .then(function (response) {
                if (response.data.body.token) {
                    localStorage.setItem('jwtToken', response.data.body.token);
                    return response;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    }

    getUserProfile() {    
        return axios
            .post(
                API_URL_USER_PROFILE,
                {},
                {
                    headers: {
                        Authorization: `Bearer ` + localStorage.getItem('jwtToken'),
                    }
                }
            )
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
    }

    setUserProfile(firstName, lastName) {    
        return axios
            .put(
                API_URL_USER_PROFILE,
                { firstName, lastName },
                {
                    headers: {
                        Authorization: `Bearer ` + localStorage.getItem('jwtToken'),
                    }
                }
            )
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
    }
}

export default ApiProvider;
