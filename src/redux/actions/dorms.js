import axios from 'axios'
import * as types from '../types/type'

export const getData = () => ({
    type: "SHOW_DATA_DORMS",
    payload: axios({
        method: 'GET',
        url: "http://192.168.1.29:3000/api/dorms"
    })
})

export const addDorms = value => ({
    type: types.SHOW_DATA_DORMS,
    payload:value
})