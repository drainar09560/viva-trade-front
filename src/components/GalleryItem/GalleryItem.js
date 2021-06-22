import './index.scss'

function GalleryItem(gallery) {

    console.log(123)

    return(
        <div className="galleryItem" key={gallery.id}>
            <div className="galleryItem-wrapper">
                <div className="galleryItem-pic" style={{backgroundImage:`url(${gallery.gallery.src})`}}>

                </div>
                <div className="galleryItem-desc">
                    <p className="galleryItem-desc-text">{gallery.gallery.description}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;