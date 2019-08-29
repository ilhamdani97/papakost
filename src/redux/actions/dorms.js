import axios from 'axios'
import * as types from '../types/type'
import { API } from 'react-native-dotenv'
export const getData = () => ({
    type: "SHOW_DATA_DORMS",
    payload: axios({
        method: 'GET',
        url: `${API}dorms`
    })
})

export const addDorms = value => ({
    type: types.SHOW_DATA_DORMS,
    payload:value
})