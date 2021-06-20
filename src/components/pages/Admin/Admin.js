import React from 'react';
import './index.scss'
import Header from '../../Header/Header'
import logo from "../../../assets/ph.png";
import { Link, Route, Switch } from 'react-router-dom'
import Service from "./components/Services/Service";

function Admin() {

    return(
        <div className="admin">
            <div className="admin-header">
                <div className="header-middle">
                    <div className="header-middle-wrapper container">
                        <img src={logo} alt="" className="header-logo"/>
                        <h1>Вива-Метал : Панель администратора</h1>
                    </div>
                </div>
            </div>
            <ul className="admin-nav">
                    <li className="admin-nav-item">
                        <Link to='/adminpanel/services'>Услуги</Link>
                    </li>
                    <li className="admin-nav-item">

                    </li>
            </ul>
            <div className="admin-wrapper">
                <Switch>
                    <Route path='/adminpanel/services' component={Service}/>
                </Switch>
            </div>

        </div>

    )
}

export default Admin