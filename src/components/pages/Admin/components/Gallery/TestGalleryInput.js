import React from 'react';
import {Context} from "../../../../../index";
// import './index.scss'

const TestGalleryInput = ({gallery, fetchData}) => {
    const {firebase} = React.useContext(Context)
    const [description, setDescription] = React.useState(gallery.description)

    const onUp = () => {
        const db = firebase.firestore()
        db.collection('Gallery').doc(gallery.id).set({...gallery, description})
        fetchData()
    }

    const onDel = () => {
        const db = firebase.firestore()
        db.collection('Gallery').doc(gallery.id).delete()
        fetchData()
    }

    return (
        <div key={gallery.id} >
            <img src={gallery.src} alt="" style={{width:'100%', height:'400px'}}/>
            {/*<p style={{fontSize:'30px', textAlign:'center', marginTop:'20px', maxWidth:'446px', overflow:'hidden'}}>{service.title}</p>*/}
            <textarea
                style={{
                    width: '100%',
                    height: '300px',
                    border: '1px solid #F5F5F5',
                    resize: 'none',
                    marginTop:'20px',
                    fontSize:'20px',
                    padding: '10px',
                }}
                value={description}
                onChange={
                    (e) => {
                        setDescription(e.target.value)
                    }
                }
            />
            <div style={{display: 'flex'}}>
                <button onClick={onUp} style={{flex: 1, height: '40px', borderRight: '4px solid white', fontSize: '18px'}} className="servBtn">Обновить</button>
                <button onClick={onDel} style={{flex: 1, height: '40px', fontSize: '18px'}} className="redBtn">Удалить</button>
            </div>
        </div>
    );
};

export default TestGalleryInput;
