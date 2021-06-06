import React from 'react';
import './index.scss'

function PurchaseItem({purchase}){

    return(
        <div className="purchase_item">
            <div className="purchase_item-left">
                <div className="purchase_item-left_container">
                    <div className="purchase_item-left-item">
                        <p className="purchase_item-title">{purchase.rule}</p>
                        <h1 className="purchase_item-eis">{purchase.eis}</h1>
                    </div>
                    <div className="purchase_item-left-item">
                        <p className="purchase_item-title">Название закупки</p>
                        <p className="purchase_item-text">{purchase.name}</p>
                    </div>
                    <div className="purchase_item-left-item">
                        <p className="purchase_item-title">Заказчик</p>
                        <p className="purchase_item-text purchase_item-uppercase">{purchase.client}</p>
                    </div>

                </div>
            </div>
            <div className="purchase_item-about">
                <div className="purchase_item-about-container">
                    <div className="purchase_item-about-price">
                        <p className="purchase_item-title">Начальная цена</p>
                        <h1>{purchase.price}</h1>
                    </div>
                    <div className="purchase_item-about-date">
                        <div className="purchase_item-about-date_container">
                            <div className="purchase_item-form-container">
                                <p className="purchase_item-title">Размещено</p>
                                <p>{purchase.startDate}</p>
                            </div>
                            <div className="purchase_item-form-container">
                                <p className="purchase_item-title">Обновлено</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="purchase_item-about-date_end">
                            <p className="purchase_item-title">Окончание подачи заявок</p>
                            <p>08.04.2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseItem;