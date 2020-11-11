import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001"
})

//====================== Auth ==========================
export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');

    if(token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data;
    }
    return false;
}

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const createUser = async (registerData) => {
    const resp = await api.post('/auth/signup', registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}


//====================== Profile ==========================

export const destroyProfile = async (id) => {
    await api.delete(`/profile/${id}`);
}

export const putProfile = async (id, profileData) => {
    const resp = await api.put(`/profile/${id}`, profileData);
    return resp.data;
}



