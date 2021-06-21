import React from 'react';
import Modal from "../../../Modal/Modal";
import {Context} from "../../../../../../index";

const ModalAddGallery = ({fetchData}) => {
    const {firestore,storage} = React.useContext(Context)

    const [ modalActive, setModalActive ] = React.useState(false)

    const [ progress, setProgress ] = React.useState(0)
    const [ image, setImage ] = React.useState(null)
    const [ url, setUrl ] = React.useState('')
    const [ error, setError ] = React.useState('')

    // const [ title, setTitle ] = React.useState('')
    const [ description, setDescription ] = React.useState('')

    const downloadFile = e => {
        try{
            if(e.target.files[0]){
                setImage(e.target.files[0])
            }
        }catch(e){
            alert(e)
        }
    }

    const handleUpload = async () => {
        try {
            const uploadTask = storage.ref(`gallery/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref('gallery')
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url);
                        });
                }
            );
        }catch (e) {
            alert(e)
        }
    }

    const createGallery = async () => {
        if( image !== null) {
            try{
                firestore.collection('Gallery').add({
                    // title: title,
                    description: description,
                    src: url
                })
                // setTitle('')
                setDescription('')
                fetchData()
            }catch(e){
                alert(e)
            }
        }else{
            setError('Добавьте файл')
        }
    }
    return (
        <div style={{position: 'fixed', left: 60}}>
            <button onClick={() => {
                setModalActive(!modalActive)
            }} style={{width: '240px', height: '50px', backgroundColor: '#0c538c', color: 'white',  overflow: 'hidden', borderRadius: '8px', fontSize: '18px'}}>Добавить</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1 style={{textAlign: 'center', marginBottom:'20px'}}>Добавить данные в сервис</h1>
                <div>
                    <progress value={progress} max='100' style={{width: '100%'}}/>
                    <div style={{display: 'flex', padding: '20px'}}>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <input onChange={downloadFile} type="file"/>
                        </div>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <button onClick={handleUpload} style={{backgroundColor: '#0c538c', color: 'white', fontSize: '16px', padding: '8px'}}>Отправить фото</button>
                        </div>
                        <p>{error}</p>
                    </div>

                </div>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    {/*<input type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)} style={{ border: '1px solid #dcdcdc', height: '30px', fontSize: '18px', padding: '8px', marginBottom: '14px'}} />*/}
                    <textarea type="text" placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} style={{ border: '1px solid #dcdcdc', resize:'none', height:'280px', fontSize: '18px', padding: '8px', marginBottom: '14px'}}/>
                    <button onClick={createGallery} style={{backgroundColor: '#0c538c', color: 'white', fontSize: '18px', padding: '8px', width: '50%', margin: '0 auto'}}>Добавить</button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalAddGallery;