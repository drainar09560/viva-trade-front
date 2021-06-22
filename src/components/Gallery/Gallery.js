import './index.scss'
import GalleryItem from '../GalleryItem/GalleryItem'
import React from "react";
import {Context} from "../../index";

function Gallery() {

    const [gallery, setGallery] = React.useState([])
    const {firebase} = React.useContext(Context)

    const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection('Gallery').get()
        setGallery(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    React.useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="gallery">
            <div className="gallery-wrapper container">
                <h1 className="gallery-title">Галлерея</h1>
                <div className="gallery-block">
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {/*<GalleryItem/>*/}
                    {
                        gallery.map((elem, index) => (
                                <div key={elem.text}>
                                    <GalleryItem fetchData={fetchData} index={index} gallery={elem}/>
                                </div>
                            )
                        )
                    }
                </div>
            </div>

        </div>
    )

}

export default Gallery;