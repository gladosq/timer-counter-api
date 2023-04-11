import axios from 'axios';

export const timeFetcher = async () => {
    return axios.get(
        'https://api.timezonedb.com/v2.1/get-time-zone?key=I2VJQ0NZWK14&format=json&by=zone&zone=America/Chicago',
        {
            method: 'GET',
            headers: {'Content-type': 'application/json',},


        }
    );
};
