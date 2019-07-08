import axios from "axios";

export default axios.create({
    // TODO move values to .env file
    baseURL: 'https://api.eu.wibbu.co.uk/parse',
    headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'wr1sU3ZEh0L0FyT2FlHTfihDTM7fjeOyhbcIiUA75aDiuWj8jJ2tBqLy6a57gQ9M',
    }
});