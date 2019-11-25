import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//List Componentes Pages
import Menu from './core/menu/Menu';
import App from './App';
import Login from './pages/login/index';
import IndexCargo from './pages/cargo/index';
import FormCargo from './pages/cargo/form';
import NotFound from './pages/not-found/index';

ReactDOM.render(
    <BrowserRouter>
        <Menu />,
        <Switch>

            <Route path="/" exact={true} component={App} />
            <Route path="/login" exact={true} component={Login} />
            
            {/*Cargos*/}
            <Route path="/cargo" component={IndexCargo} />
            <Route path="/cargo/add" component={FormCargo} />
            <Route path="/cargo/edit/:id" component={FormCargo} />

            {/* <PrivateRoute path="/cargo" component={Cargo} /> */}
            
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root'));

serviceWorker.unregister();
