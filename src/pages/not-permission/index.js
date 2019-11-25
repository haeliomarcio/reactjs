import React, {Component} from 'react';

class NotPermission extends Component{
    render(){
        return (
            <div className="not-permission">
                <h1>Você não possui permissão para acessar esse recurso.</h1>
            </div>
        );
    }
}

export default NotPermission;