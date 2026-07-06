import axios from "axios";

const API_URL = "http://localhost:8080/applications";

export const getApplications = () => {
    return axios.get(API_URL);
};
export const addApplication = (application) =>
    axios.post(API_URL, application);

export const deleteApplication = (id)=>{
    return axios.delete(`${API_URL}/${id}`);
}

export const updateApplication = (id,application) =>{
    return axios.put(`${API_URL}/${id}`,application);
}

export const searchApplications = (companyName) => {
    return axios.get(`${API_URL}/company/${companyName}`);
};