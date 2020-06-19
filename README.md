# airtime-app
Purchase airtime for multiple numbers easily

**Steps to test**<br>
*Get public key and private key from wallets.africa<br>
*Create a .env file in the root directory after cloning this repository and add the following variables Public_Key=yourpublickey Secret_Key=yourprivatekey.<br>
*Install the app's dependancies<br>
*Run the app <code>node server.js</code><br>
*Go to postman and start testing<br>
**Endpoints**<br>
*POST localhost:3000/api/purchase<br>
request body =[<br>
  {"Code":"network provider",<br>
  "Amount":"amount to transfer",<br>
  "PhoneNumber":"phone number to transfer to",<br>
  },<br>
  {"Code":"network provider",<br>
  "Amount":"amount to transfer",<br>
  "PhoneNumber":"phone number to transfer to",<br>
  },<br>
  {"Code":"network provider",<br>
  "Amount":"amount to transfer",<br>
  "PhoneNumber":"phone number to transfer to",<br>
  }<br>
  //please note that you can enter any number of items you want here<br>
]
