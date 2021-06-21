import './index.scss'

function ServiceItem(service, fetchData, index) {


    return(
        <div className="service-item" key={service.id}>
            <div className="service-item-wrapper">
                <div className="service-item-photo" style={{backgroundImage:`url(${service.service.src})`}}>
                    <div className="service-item-desc">
                        <h1 className="service-item-title">
                            {service.service.title}
                        </h1>
                        <p className="service-item-text">
                            {service.service.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceItem;