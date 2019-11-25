import React, {Component} from 'react';

export default class InputCustom extends Component{

    render(){
        return (
            <div className="form-control">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }

}