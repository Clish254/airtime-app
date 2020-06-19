const purchase = require('./src/controllers/purchase')

const asyncApiCall = async () => {
    const responses = await purchase.makePurchase("mtn",100,"+2348134517065")
    .then((response)=>{
        this.data = response.data;
        console.log(this.data)
      })
      .catch((error)=>{
        console.log(error)
      })
}

asyncApiCall()