const axios = require("axios");
const BASE_URL = `api.wallets.africa`
module.exports = {
    getProvider: (code,amount,phoneNumber) => axios({
        method:"POST",
        url : BASE_URL + `/bills/airtime/providers`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.Public_Key}`
        },
        params: {
            Code: code,
            Amount: amount,
            PhoneNumber:phoneNumber,
            SecretKey:process.env.Secret_Key
        },
    })
}