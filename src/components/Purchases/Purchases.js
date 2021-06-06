import React, { useEffect } from 'react';
import './index.scss'
import Filter from '../Filter/Filter'
import PurchaseItem from '../PurchaseItem/PurchaseItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/actions/Purchases'

function Purchases() {
    const dispatch = useDispatch()
    const data = useSelector(data => data)
    useEffect(() => dispatch(fetchData()), [])
    console.log(data)

    return (
        <div className="purchases">
            <div className="purchases-wrapper container">
                <Filter/>
                <div className="test1">
                    {data.map((purchase, index) => {
                        return <PurchaseItem purchase={purchase} index={index} key={purchase.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Purchases