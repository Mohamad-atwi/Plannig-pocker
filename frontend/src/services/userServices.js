import axios from "axios";
import { API_URL } from '../config/environment';

// // userServices.getAllUsers().then(x => { x.map(y => console.log(y)) });
// export const getAllUsers = async () => {
//     try {
//         const response = await axiosClient.get(`${config.baseUrl}/users/get-all`);
//         return response.data;
//     } catch (error) {
//         return [];
//     }
// }

// // userServices.getUser(4).then(x => console.log(x[0]));
// export const getUser = async (id) => {
//     try {
//         const response = await axiosClient.get(`${config.baseUrl}/users/get-by-id/${id}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }

// userServices.createUser(username,password);
export const createUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/users`, {
            username: username,
            password: password
        }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        return [];
    }
}


// // userServices.updateUser(username, email, password, confirmed, blocked, id);
// export const updateUser = async (username, email, isAdmin, confirmed, blocked, id) => {

//     try {
//         const response = await axiosClient.put(`${config.baseUrl}/users/update`, {
//             username: username,
//             email: email,
//             isAdmin: isAdmin,
//             confirmed: confirmed,
//             blocked: blocked,
//             id: id
//         }, {
//             headers: {
//                 'Cache-Control': 'no-cache'
//             }
//         });
//         return response;
//     } catch (error) {
//         return [];
//     }
// }

// // userServices.deleteUser(id);
// export const deleteUser = async (id) => {
//     try {
//         const response = await axiosClient.delete(`${config.baseUrl}/users/delete/${id}`);
//         return response;
//     } catch (error) {
//         return [];
//     }
// }
// userServices.login(username, password);

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username: username,
            password: password
        })

        if (response.status === 200) {
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
        };

        return true;
    } catch (error) {
        return false;
    }
}

export const logout = () => {
    sessionStorage.removeItem('user');
}