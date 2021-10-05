import axios from 'axios';
import { 
    API_URL_USER_LOGIN,
    API_URL_USER_PROFILE 
} from 'utils/constants/constants';

class ApiProvider {
    /**
     * Use axios to POST login & password data to the API
     * If response & remember is checked, we add the JWToken to the localStorage and return the response
     * Otherwise we return the error
     * @param {string} login login
     * @param {string} password password
     * @return {Object}
     */
    userLogIn(login, password, remember) {
        return axios
            .post(API_URL_USER_LOGIN, {
                email: login,
                password: password,
            })
            .then(function (response) {
                if (response.data.body.token) {
                    if (remember) {
                        localStorage.setItem('jwtToken', response.data.body.token)
                    }
                    return response;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    }

    /**
     * Use axios to POST the JWToken to the API to retrieve user information
     * If response, return the response
     * Otherwise, return the error
     * @return {Object}
     */
    getUserProfile(jwToken) {    
        return axios
            .post(
                API_URL_USER_PROFILE,
                {},
                {
                    headers: {
                        Authorization: `Bearer ` + jwToken,
                    },
                }
            )
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
    }

    /**
     * Use axios to PUT the data 'firstName' & 'lastName' to the API in order to update the data
     * If response, return response
     * Otherwise, return the error
     * @param {string} firstName firstName
     * @param {string} lastName lastName
     * @return {Object}
     */
    setUserProfile(firstName, lastName, jwToken) {    
        return axios
            .put(
                API_URL_USER_PROFILE,
                { firstName, lastName },
                {
                    headers: {
                        Authorization: `Bearer ` + jwToken,
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
