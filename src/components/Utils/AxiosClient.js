import axios from "axios";

export default axios.create({
    // TODO move values to .env file
    baseURL: '//api.testing.wibbu.co.uk/parse',
    headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'YMuWt4rRsUUiexGPRR420SFodhtGX0zXF5xRLJGWynHaMU9LApoBT46ZhCONFkK1',
    }
});