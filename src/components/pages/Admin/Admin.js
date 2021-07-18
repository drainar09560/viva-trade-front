import React from 'react';
import './index.scss'
import Header from '../../Header/Header'
// import logo from "../../../assets/ph.png";
import { Link, Route, Switch } from 'react-router-dom'
import Service from "./components/Services/Service"
import logo from '../../../assets/logoV.jpg'
import Gallery from "./components/Gallery/Gallery"

function Admin() {

    return(
        <div className="admin">
            <div className="admin-header">
                <div className="header-middle">
                    <div className="header-middle-wrapper container" style={{padding: '20px 0'}}>
                        <img src={logo} alt="" className="header-logo" style={{width: '240px', height: '160px'}}/>
                        <h1>Вива-Метал : Панель администратора</h1>
                    </div>
                </div>
            </div>
            <ul className="admin-nav">
                    <li className="admin-nav-item">
                        <Link to='/adminpanel/services' style={{color: 'white'}}>Услуги</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to='/adminpanel/gallery' style={{color: 'white'}}>Галерея</Link>
                    </li>
            </ul>
            <div className="admin-wrapper">
                <Switch>
                    <Route path='/adminpanel/services' component={Service}/>
                    <Route path='/adminpanel/gallery' component={Gallery}/>
                </Switch>
            </div>

        </div>

    )
}

export default Admin