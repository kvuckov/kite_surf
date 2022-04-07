import axios from 'axios';

// const host = "http://maestral-kitesurfing.com/api/v1/send-email"
const host = "http://test.maestral-kitesurfing.com/api/v1/send-email"

const sendEmail = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(host, { data })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response ? error.response.data : error.message);
            });
    });
}

export default sendEmail;