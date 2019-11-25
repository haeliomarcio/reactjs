import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Menu extends Component{
    render(){
        return (
            <div id="menu">
                <Link to="/">Início</Link>
                <Link to="/cargo">Cargo</Link>
                <Link to="/dsadsada">Not Found</Link>
            </div>
        );
    }
}
