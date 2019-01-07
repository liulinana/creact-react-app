import axios from 'axios';
import { message } from 'antd';
import qs from 'qs';


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

const ajaxPromise =function (method, url, data){
    return new Promise ( (resolve,reject) => {
        axios({method,url,data}).then(
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
    let params = qs.stringify(data);
    let method = "get";
    return ajaxPromise(method,url,params)

};

http.post = function (url,data) {
    let params = qs.stringify(data);
    let method = "post";
    return ajaxPromise(method,url,params)

};

export default http;
