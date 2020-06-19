const purchasing = require("./purchase");
const dotenv =require('dotenv').config()
const axios = require("axios");
var rp = require('request-promise');

exports.purchase = (req,res) => {
    //validate request 
    if(!req.body) {
        return res.status(400).send({
            message:"Please fill all required"
        })
    }else{
    for (let key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            item = req.body[key];
            let code = item.Code;
            let amount = item.Amount;
            let phoneNumber = item.PhoneNumber;
            subscriber = new Object();
            subscriber.Code = code;
            subscriber.Amount = amount;
            subscriber.PhoneNumber = phoneNumber;
            subscriber.SecretKey = process.env.Secret_Key;
            args = JSON.stringify(subscriber)
            const BASE_URL = `https://api.wallets.africa`
            url = BASE_URL+`/bills/airtime/purchase`
              
              /*axios.post(url, subscriber, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+process.env.Public_Key
                }
            })
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })*/
              let options = {
                method: 'POST',
                uri: url,
                form: subscriber,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+process.env.Public_Key
                }
            };
             
            rp(options)
                .then(function (body) {
                    console.log(body)
                })
                .catch(function (err) {
                    console.log(err)
                });
            }
          }
    }
}