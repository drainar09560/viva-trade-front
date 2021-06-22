import './index.scss'
import ServiceItem from '../ServiceItem/ServiceItem'
import React from "react";
import {Context} from "../../index";
import emailjs from 'emailjs-com'

function Services() {

    const sendEmail = (e) => {
        try{
            e.preventDefault();
            emailjs.sendForm('service_d7mvd0i', 'template_gdeh5md', e.target, 'user_t2JPGxYagFqgqPHKonU4v')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            alert('Сообщение успшено отправлено!')
        }catch (e) {
            alert('Произлошла ошибка, попробуйте позже.')
        }
    }

    const [service, setService] = React.useState([])
    const {firebase} = React.useContext(Context)
    const [loading, setLoading] = React.useState(false)

    const fetchData = async () => {
        setLoading(true)
        const db = firebase.firestore()
        const data = await db.collection('Service').get()
        setService(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        setLoading(false)
    }
    React.useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="services">
            <div className="services-wrapper container">

                <div className="services-info">
                    <h1 className="services-title">Сварка и монтаж на заказ</h1>
                    <p className="services-text">Квалифицированная бригада сварщиков из Оренбурга быстро, качественно и в срок выполнит любые сварочные работы в Оренбурге и области по умеренным ценам. Оказываем услуги в городе Оренбурге по монтажу сварных металлоконструкций. Осуществляем установку сварных изделий в Оренбурге и Оренбургской области.</p>
                    <p className="services-text services-number">+7 (922) 888 05 55</p>
                    <p className="services-text">Изготовляем и монтируем сварные изделия и сварные конструкции: заборы, ворота, калитки, балконы, решётки на окна, перила, лестницы, навесы для входа, навесы для машин, беседки, ангары и склады, детские спортплощадки, игровые площадки, спортивные площадки и городки, полосы препятствий для учебных заведений, строительные и охранные ограждения в Оренбурге и области.</p>
                </div>
                <div className="services-top-title">
                    Наши услуги
                </div>
                <div className="services-cards">
                    {
                        service.map((elem, index) => (
                            <div key={elem.text}>
                                <ServiceItem fetchData={fetchData} index={index} service={elem}/>

                            </div>
                        )
                    )
                    }
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'80px'}}>
                <h1 style={{marginBottom: '30px', fontSize: '32px', color:'#0C538C'}}>Оставить заявку нам на почту</h1>
                <div>
                    <form onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{marginBottom:'40px'}}>
                            <input type="text" name="name1" placeholder='ФИО' style={{border: '1px solid #dcdcdc', fontSize: '18px', padding: '8px', marginRight: '20px'}}/>
                            <input type="text" name="name2" placeholder='Телефон' style={{border: '1px solid #dcdcdc', fontSize: '18px', padding: '8px', marginRight: '20px'}}/>
                            <input type="text" name="name3" placeholder='Желаемая услуга' style={{border: '1px solid #dcdcdc', fontSize: '18px', padding: '8px', marginRight: '20px'}}/>
                        </div>
                        <input type="submit" value="Отправить" style={{width: '250px', height: '30px', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#0C538C', color: 'white', fontSize: '18px'}}/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Services;