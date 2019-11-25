import request from './request';

class services{
    endPoint = '';
    params = {};

    constructor(endPoint, params){
        this.endPoint = endPoint;
        this.params = params;
    }

    setEndPoint(endPoint){
        this.endPoint = endPoint;
    }

    findAll(params){
        return request.get(this.endPoint, params);
    }

    findById(id){
        return request.get(this.endPoint, {id: id});
    }

    create(params){
        return request.post(this.endPoint, params);
    }

    update(params){
        return request.put(this.endPoint, params);
    }

    delete(id){
        return Request.delete(this.endPoint, id);
    }
}

