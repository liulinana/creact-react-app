import axios from "axios";
import qs from "qs";
import {headers} from "../axios/axios";

export const ActionCreator = (type, url, method, data,key) => {
     return () => {
        return {
            promise: () => {
                return new Promise((resolve, reject) => {
                    let params = qs.stringify(data);
                    axios({
                        method,
                        url,
                        params,
                        headers: {...headers},
                    }).then(
                        res => {
                            resolve(res)
                        }
                    ).catch(
                        err => {
                            reject(err);
                        })
                })
            },
            type: type,
            payload: key,
        }
    }
};

// export const ActionCreator = (type, url, method, data,key) => {
//     return () => {
//         return {
//             promise: () => {
//                 return new Promise((resolve, reject) => {
//                     let params = qs.stringify(data);
//                     axios({
//                         method,
//                         url,
//                         params,
//                         headers: {...headers},
//                     }).then(
//                         res => {
//                             resolve(res.data)
//                         }
//                     ).catch(
//                         err => {
//                             reject(err);
//                             }
//                         )
//                 })
//             },
//             types: type,
//             payload: key,
//         }
//     }
// };
