import React, {useEffect} from 'react';
import {Context} from "../../../../../index";
import Modal from "../../Modal/Modal";
import ModalAddService from "./Modals/ModalAddService";

const Service = () => {
    const { firebase } = React.useContext(Context)

    const [ service, setService ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false)

    const ref = firebase.firestore().collection('Service')

    const getService = () => {
        setLoading(true)
        ref.onSnapshot((qSnap) => {
            const items = []
            qSnap.forEach((doc) => {
                items.push(doc.data())
            })
            setService(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getService()
    },[])

    return (
        <div>
            { loading ? <h1 style={{color:'red'}}>Загрузка</h1> : null }
            <div style={{}}>
                <ModalAddService/>
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'1fr 1fr 1fr',
                    gap: '30px',
                    }}>
                    {
                        service.map((elem,index) => (
                                <div>
                                    <img src={elem.src} style={{width:'100%', height:'400px'}}/>
                                    <h1 key={index}>{elem.title} </h1>
                                    <p>{elem.description}</p>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;
