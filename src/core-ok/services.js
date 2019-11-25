import api from './../core/services/api';

class services{
    
    constructor(endPoint){
        this.endPoint = endPoint;
    }

    async findAll(){
        let data = [];
        await api.get(this.endPoint)
        .then((resp) => {
            data = resp.data;
        })
        .catch((err) => {
            console.log(err);
        });
        return data;
    }

    async findById(id){
        let data = [];
        await api.get(this.endPoint+"/"+id)
        .then((resp) => {
            data = resp.data;
        })
        .catch((err) => {
            console.log(err);
        });
        return data;
    }

    async create(params){
        let data = [];
        await api.post(this.endPoint, params)
        .then((res) => {
            data = res.data;
        }).catch((err) => {
            console.log(err);
        });
        return data;
    }

    async update(params){
        let data = [];
        await api.put(this.endPoint, params)
        .then((res) => {
            data = res.data;
        }).catch((err) => {
            console.log(err);
        });
        return data;
    }

    async delete(id){
        let data = [];
        await api.delete(this.endPoint+"/"+id)
        .then((res) => {
            data = res.data;
        }).catch((err) => {
            console.log(err);
        });
        return data;
    } 
    
}

export default services;