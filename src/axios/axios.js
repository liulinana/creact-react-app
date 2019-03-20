import axios from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = '';

let http = {
    get:"",
    post:"",
    delete:"",
    put:"",
    patch:"",
    head:"",
    request:""
};

export const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
};

const ajaxPromise =function (method, url, data){
    return new Promise ( (resolve,reject) => {
        axios({
                url,
                method: method,
                headers:{...headers},
                data: JSON.stringify(data)
            }).then(
            (res) => {
                resolve(res)
            }
        ).catch(
            err => {
                message.error(err.message, 3)
                reject(err);
            }
        )
    })
};

http.get = function (url,data) {
    let method = "get";
    return ajaxPromise(method,url,data)

};

http.post = function (url,data) {
    let method = "post";
    return ajaxPromise(method,url,data)

};

export default http;
