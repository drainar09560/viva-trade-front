import './index.scss'
import GalleryItem from '../GalleryItem/GalleryItem'

function Gallery() {
    return(
        <div className="gallery">
            <div className="gallery-wrapper container">
                <h1 className="gallery-title">Галлерея</h1>
                <div className="gallery-block">
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                    <GalleryItem/>
                </div>
            </div>

        </div>
    )

}

export default Gallery;