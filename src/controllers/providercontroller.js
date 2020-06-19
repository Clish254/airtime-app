const providers = require("./getProvider");
exports.provider = (req,res) => {
    //validate request 
    if(!req.body) {
        return res.status(400).send({
            message:"Please fill all required"
        })
    }else{
    for (let key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            item = req.body[key];
            let Code = item.Code;
            let Amount = item.Amount;
            let PhoneNumber = item.PhoneNumber;
            let SecretKey = process.env.Secret_Key
            try {
                const asyncApiCall = async () => {
                    const responses = await providers.getProvider(Code,Amount,PhoneNumber,Secret_Key)
                    .then((response)=>{
                        this.data = response.data;
                        console.log(this.data)
                      })
                      .catch((error)=>{
                        console.log(error)
                      })
                }
                
                asyncApiCall()
            }catch(err){
                res.status(400).send(err)
            }
            }
          }
    }
}