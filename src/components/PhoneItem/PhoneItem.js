import React from 'react';
import './index.scss'
import call from '../../assets/call.svg'

function PhoneItem(props) {

    return(
        <div className="phone_item-wrapper">
            {/*<img src={call} alt="" className="phone_item-pic" style={{weight: '20px', height: '20px'}}/>*/}
            <div>
                <p className="phone_item-title">{props.title}</p>
                <p className="phone_item-number">{props.number}</p>
            </div>
        </div>
    )
}

export default PhoneItem;