import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {dispatch ,getState} = store;

export async function getHeader(){
    let userData = await AsyncStorag.get
}

export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions= {}
){
    return new Promise(async (res, rej)=> {
        const getTokenHeader = await getHeader();
    })
}


export  function apiPost(endPoint, data, header= {}){
    return api
}

export function setItem(key, data){
    data=JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}

export function setUserData(data){
    data = JSON.stringify(data);
    return AsyncStorage.setItem('user', data);
}

export const postApi = async (dispatch, url,payload)=> {
    await dispatch(sigReq({uri: url}));
    await axios.post(uri,payload).then(data)
}