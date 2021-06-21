import React from 'react';
import {Context} from "../../../../index";
import TestServiceInput from "./TestServiceInput";
import ModalAddService from "../components/Services/Modals/ModalAddService";

const Test = () => {
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
    console.log(service)

    return (
        <div>
            <ModalAddService fetchData={fetchData}/>
            {loading ? <h1>Загрузка...</h1> : null}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '30px',
            }}>
                {service.map((elem, index) => (
                        <div key={elem.text}>
                            <TestServiceInput fetchData={fetchData} index={index} service={elem}/>
                        </div>
                    )
                )
                }
            </div>
        </div>
    );
};

export default Test;
