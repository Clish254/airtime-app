const provider = require('./src/controllers/getProvider')

const asyncApiCall = async () => {
    const responses = await provider.getProvider("airtel","100","+2348134517065")
    .then((response)=>{
      console.log(response.data);
      })
      .catch((error)=>{
        console.log(error)
      })
}

asyncApiCall()