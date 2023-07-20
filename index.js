const express = require('express');
const app = express();
const port= 8080;

app.use('/', require('./routes'));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
    if(err){
        console.log(`There is error in runnnig  in server ${err}`);
    }

    console.log(`server is up and running on PORT: ${port}`);
});
