import React from 'react';
import Header from '../../Header/Header'
import Search from '../../Search/Search'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import Purchases from '../../Purchases/Purchases'
import './index.scss'

function Home(props) {

    return(
        <div>
            <Header/>
            <Search/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home;