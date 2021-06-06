import React from 'react';
import './index.scss';

function Filter() {

    return (
        <div className="filter">
            <div className="filter-container">
                <div className="filter-group">
                    <p className="filter-group-title">Правило проведения</p>
                    <div className="filter-item">
                        <input type="checkbox" className="filter-item-chbox"/>
                        <span className="filter-item-caption">44-ФЗ</span>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="filter-item-chbox"/>
                        <span className="filter-item-caption">223-ФЗ</span>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="filter-item-chbox"/>
                        <span className="filter-item-caption">Закупки малого объема</span>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="filter-item-chbox"/>
                        <span className="filter-item-caption">Коммерческие</span>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="filter-item-chbox"/>
                        <span className="filter-item-caption">615-ППРФ</span>
                    </div>
                </div>
                <div className="filter-group">
                    <p className="filter-group-title">Площадки</p>
                    <div className="filter-item">
                        <select className="filter-item-select" />
                    </div>
                </div>
                <div className="filter-group">
                    <input type="text" placeholder="Номер извещения на ЕИС" className="filter-item-input"/>
                    <input type="text" placeholder="Номер извещения" className="filter-item-input"/>
                    <input type="text" placeholder="Заказчик (ИНН)" className="filter-item-input"/>
                    <input type="text" placeholder="Организатор (ИНН)" className="filter-item-input"/>
                    <input type="text" placeholder="Способ закупки" className="filter-item-input"/>
                </div>
                <div className="filter-group">
                    <p className="filter-group-title ">Цена</p>
                    <div className="filter-item price-container">
                        <input type="text" placeholder="От" className="filter-item-input price-input"/>
                        <input type="text" placeholder="До" className="filter-item-input price-input"/>
                    </div>
                </div>
                <div className="filter-group">
                    <p className="filter-group-title">Размер обеспечения заявки</p>
                    <div className="filter-item price-container">
                        <input type="text" placeholder="От" className="filter-item-input price-input"/>
                        <input type="text" placeholder="До" className="filter-item-input price-input"/>
                    </div>
                </div>
                <button className="filter-btn">Применить</button>

            </div>
        </div>
    )
}

export default Filter;