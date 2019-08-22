import axios from 'axios'

export default axios.create({
    apiURL:"http://192.168.1.138:1997/api/",
    responseType:"json"
})