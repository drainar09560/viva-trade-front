import React from 'react';
import './index.scss'

const Modal = ({ active,setActive,children }) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={e =>e.stopPropagation()} // закрытие не работало на саму модалку
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
