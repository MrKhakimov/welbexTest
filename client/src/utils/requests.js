import axios from "axios";

const baseUrl = 'http://localhost:8080/api';

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const getDataFunc = (url, query) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}${url}?${query}`, {...config})
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}