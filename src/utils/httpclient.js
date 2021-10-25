import axios from 'axios';

const STATION_BASE_URL = 'http://qa-radio-api-stations.ctc.edu.do'
const TIMEOUT_AMOUNT = 5000

const HTTPStationClient = axios.create({
    baseURL: STATION_BASE_URL,
    timeout: TIMEOUT_AMOUNT,
})


const AUTH_BASE_URL = 'http://155.138.209.111/api-auth/users/authenticate';

const HTTPAuthClient = axios.create({
    baseURL: AUTH_BASE_URL,
    timeout: TIMEOUT_AMOUNT
})


export { HTTPAuthClient, HTTPStationClient }