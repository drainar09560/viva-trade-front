import './index.scss'
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery'

function Main() {

    return(
        <div className="mainx">
            <Services/>
            <div className="mainx-info">
                <div className="mainx-info-wrapper">
                    <div className="mainx-info-banner">
                        <h1 className="mainx-info-title">Где заказать сварочные работы в городе Оренбурге?</h1>
                        <p className="mainx-info-text">Позвоните по телефону <span className="mainx-info-sp">+7 (922) 888-05-55</span></p>
                    </div>
                </div>
            </div>
            <Gallery/>
        </div>
    )
}

export default Main