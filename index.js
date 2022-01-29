const express = require('express');
const app = express();


app.use(express.static('public'));
let port = (process.env.PORT || 3000);

app.get('/', (req,res)=>{
    app.send("Your Server Is All Ready..!!");
})

app.listen(port, ()=>{
    console.log(`The Server Has Started Listening On Port ${port}..!!`);
})