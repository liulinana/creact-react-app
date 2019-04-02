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

const ajaxPromise =function (method, url, data, download,pic){
    if (download) {
        axios({
            url,
            method: method,
            headers:{...headers},
            data: JSON.stringify(data)
        }).then((res)=>{
            return res.blob();
        }).then(
            (blob)=>{
                if(pic){
                    const aLink = document.createElement('a');
                    document.body.appendChild(aLink);
                    aLink.style.display='none';
                    const objectUrl = window.URL.createObjectURL(blob);
                    aLink.href = objectUrl;
                    aLink.download = typeof data === 'string' ? data : '图片';
                    aLink.click();
                    document.body.removeChild(aLink);
                }else{
                    const a = document.createElement('a');
                    const url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
                    const filename = typeof data === 'string' ? data : '导出.xls';
                    a.href = url;
                    a.download = filename;
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
            }
        )
    } else {
        return new Promise ( (resolve,reject) => {
            axios({
                url,
                method: method,
                headers:{...headers},
                data: JSON.stringify(data)
            }).then(
                res => {
                    resolve(res)
                }
            ).catch(
                err => {
                    message.error(err.message, 3)
                    reject(err);
                }
            )
        })
    }
};

http.get = function (url,data,download,pic) {
    let method = "get";
    return ajaxPromise(method,url,data,download,pic)

};

http.post = function (url,data,download,pic) {
    let method = "post";
    return ajaxPromise(method,url,data,download,pic)

};

export default http;
