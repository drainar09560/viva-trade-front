import { GETDATA, SENDNEWDATA } from '../actions/Purchases'

const Purchases = (store = [], action) => {

    switch (action.type) {
        case GETDATA:
            return [...store, ...action.payload]
        case SENDNEWDATA:
            return [...store, ...action.payload]
        default: return store
    }
}

export default Purchases