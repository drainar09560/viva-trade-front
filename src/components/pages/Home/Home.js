import React from 'react';
import Header from '../../Header/Header'
import MainScreen from '../../Search/MainScreen'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import './index.scss'

function Home(props) {

    return(
        <div>
            <Header/>
            <MainScreen/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home;