import Home from './components/pages/Home/Home'
import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'
import Admin from "./components/pages/Admin/Admin";

function App() {


    return (
            <div className="App">
                <Route exact path='/' component={Home}/>
                <Route exact path='/admin' component={Admin}/>
            </div>
    );
}

export default App;
