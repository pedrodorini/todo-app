import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://todowebservice.herokuapp.com/api/',
})

export default instance
