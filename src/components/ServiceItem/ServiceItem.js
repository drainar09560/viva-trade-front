import './index.scss'

function ServiceItem(props) {

    return(
        <div className="service-item">
            <div className="service-item-wrapper">
                <div className="service-item-photo">
                    <div className="service-item-desc">
                        <h1 className="service-item-title">
                            {props.title}
                        </h1>
                        <p className="service-item-text">
                            {props.text}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceItem;