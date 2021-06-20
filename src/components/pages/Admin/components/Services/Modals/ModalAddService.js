import React from 'react';
import Modal from "../../../Modal/Modal";
import {Context} from "../../../../../../index";

const ModalAddService = () => {
    const {firestore,storage} = React.useContext(Context)

    const [ modalActive, setModalActive ] = React.useState(false)

    const [ progress, setProgress ] = React.useState(0)
    const [ image, setImage ] = React.useState(null)
    const [ url, setUrl ] = React.useState('')
    const [ error, setError ] = React.useState('')

    const [ title, setTitle ] = React.useState('')
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
            const uploadTask = storage.ref(`service/${image.name}`).put(image);
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
                        .ref('service')
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

    const createServise = async () => {
        if( image !== null) {
            try{
                firestore.collection('Service').add({
                    title: title,
                    description: description,
                    src: url
                })
                setTitle('')
            }catch(e){
                alert(e)
            }
        }else{
            setError('Добавьте файл')
        }
    }
    return (
        <div>
            <button onClick={() => {
                setModalActive(!modalActive)
            }}>Добавить данные</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>Добавить данные в сервис</h1>
                <input type="text" placeholder="Описание" value={title} onChange={e => setTitle(e.target.value)}/>
                <progress value={progress} max='100'/>
                <input onChange={downloadFile} type="file"/>
                <button onClick={handleUpload}>Отправить фото</button>
                <p>{error}</p>
                <button onClick={createServise}>Добавить данные</button>
            </Modal>
        </div>
    );
};

export default ModalAddService;
