import axios from 'axios';

export const APISERVICE = axios.create({
    baseURL : "http://localhost:8000",
    timeout : 50000
});

export const setDataInLocal = (key : string, data : any) => {
    if(!key || !data){
        return;
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export const getDataFromLocal = (key:string) => {
    if(!key) return;
    return JSON.parse(localStorage.getItem(key as string) as string);
}
