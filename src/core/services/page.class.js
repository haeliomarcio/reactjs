import {Component} from 'react';
import Services from './services';
class PageService extends Component{

    constructor(props, service){
        super(props);
        this.services = new Services('cargo'); 
    }

    loadData(){
        this.getList();
    }

    getList(params = {}){
        let data = this.services.findAll({});
        console.log(data);
    }
}

export default PageService;