import api from './api';
import { getToken } from "./auth";

class Request{

    get(apiEndPoint, params){
        return api.get(apiEndPoint, this.getOptions())
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        });
    }

    post(apiEndPoint, params){
        return api.post(apiEndPoint, params, this.getOptions())
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        });
    }

    put(apiEndPoint, params){
        return api.put(apiEndPoint, params, this.getOptions())
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        });
    }

    delete(apiEndPoint, id){
        return api.delete(apiEndPoint, this.getOptions())
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        });
    }

    getOptions(){
        let options = {};
        if(getToken){
            options.headers = { 'x-access-token': getToken };
        }
        return options;
    }
}

export default Request;