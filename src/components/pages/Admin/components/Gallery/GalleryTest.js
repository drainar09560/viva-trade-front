import React from 'react';
import {Context} from "../../../../../index";
import TestGalleryInput from "./TestGalleryInput";
import ModalAddGallery from "./Modals/ModalAddGallery";

const Test = () => {
    const [gallery, setGallery] = React.useState([])
    const {firebase} = React.useContext(Context)
    const [loading, setLoading] = React.useState(false)

    const fetchData = async () => {
        setLoading(true)
        const db = firebase.firestore()
        const data = await db.collection('Gallery').get()
        setGallery(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        setLoading(false)
    }
    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ModalAddGallery fetchData={fetchData}/>
            {loading ? <h1>Загрузка...</h1> : null}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '30px',
            }}>
                {gallery.map((elem, index) => (
                        <div key={elem.text}>
                            <TestGalleryInput fetchData={fetchData} index={index} gallery={elem}/>
                        </div>
                    )
                )
                }
            </div>
        </div>
    );
};

export default Test;