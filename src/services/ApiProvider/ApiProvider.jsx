import axios from 'axios';
import { 
    API_URL_USER_LOGIN,
    API_URL_USER_PROFILE 
} from 'utils/constants/constants';

class ApiProvider {
    /**
     * Use axios to POST login & password data to the API
     * If response we add the jwtToken to the localStorage and we return the response
     * Otherwise we return the error
     * @param {string} login login
     * @param {string} password password
     * @return {Object}
     */
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

    /**
     * Use axios to POST the jwtToken to the API to retrieve user information
     * If response, return the response
     * Otherwise, return the error
     * @return {Object}
     */
    getUserProfile() {    
        return axios
            .post(
                API_URL_USER_PROFILE,
                {},
                {
                    headers: {
                        Authorization: `Bearer ` + localStorage.getItem('jwtToken'),
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
