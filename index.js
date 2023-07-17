const express = require('express');

const app = express();
const port= 8080;


app.use('/', require('./routes'));

app.listen(port, (err) => {
    if(err){
        console.log(`There is error in runnnig  in server ${err}`);
    }

    console.log(`server is up and running ON PORT: ${port}`);
});
