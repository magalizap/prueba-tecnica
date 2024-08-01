import axios from './axios'

export const requestInput = value => axios.post('/pass', value)