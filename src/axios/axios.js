import axios from 'axios';
import qs from 'qs';


axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


let instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}

});

let http = {
    get:"",
    post:"",
    delete:"",
    put:"",
    patch:"",
    head:"",
    request:""
};

http.get = function (url,data) {
    let params = qs.stringify(data)
    return new Promise ( (resolve,reject) => {
        axios.get(url,params).then(
            (res) => {
                resolve(res)
            }
        )
    })

};

export default http

