import React from 'react';
import './index.scss'

function Admin() {

    return(
        <div className="admin">
            <div className="admin-wrapper">
                <form action="" className="admin-form">
                    <input type="text" className="admin-input" placeholder="Название закупки"/>
                    <input type="text" className="admin-input" placeholder="Заказчик"/>
                    <input type="text" className="admin-input" placeholder="Номер ЕИС"/>
                    <input type="text" className="admin-input" placeholder="Начальная цена"/>
                    <input type="date" className="admin-input" placeholder="Дата размещения"/>
                    <select name="" id="" className="admin-select" ></select>
                    <button>Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default Admin