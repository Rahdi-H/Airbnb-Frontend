import { getAccessToken } from "../lib/actions";

const apiServices = {
    get: async function (url:string): Promise<any> {
        const token = await getAccessToken()
        console.log("get service");
        return new Promise ((resolve, reject)=> {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then((json) => {
                console.log('REsponSe', json)
                resolve(json)  
            })
            .catch((error => {
                reject(error);
            }))
        })
    },

    post: async function(url:string, data:any): Promise<any>{
        console.log('post');
        const token = await getAccessToken()
        return new Promise((resolve, reject)=> {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then((json) => {
                console.log("json", json);
                
                resolve(json)
            })
            .catch((error => {
                reject(error);
            }))
        })
        
    },
    postWithOutToken: async function(url:string, data:any): Promise<any>{
        console.log('post');
        return new Promise((resolve, reject)=> {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then((json) => {
                console.log("json", json);
                
                resolve(json)
            })
            .catch((error => {
                reject(error);
            }))
        })
        
    }
}
export default apiServices;