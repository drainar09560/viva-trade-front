import axios from 'axios'
export const GETDATA = 'GET_DATA'
export const SENDNEWDATA = 'SEND_NEW_DATA'


export const getData = (payload) => {
    return {type: GETDATA, payload}
}

export const sendNewData = (payload) => {
    return {
        type: SENDNEWDATA,
        payload
    }
}

export const fetchData = () => (dispatch) => {
    axios.get('http://localhost:3000/purchases').then(({data}) => dispatch(getData(data)))
}

export const addData = (obj) => (dispatch) => {
    axios.post('http://localhost:3000/purchases', obj).then(({obj}) => dispatch(sendNewData(obj)))
}