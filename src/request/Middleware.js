import axios from "axios";
import qs from "qs";

export const ActionCreator = (type, url, method, data,key) => (
    () =>{
        return {
            promise:()=>{
                   return new Promise((resolve, reject) => {
                        let params = qs.stringify(data);
                        axios({method, url, params}).then(
                            (res) => {
                               resolve(res.data)
                            }
                        )
                  })},
            type: type,
            payload: key,
        }
    }
);
