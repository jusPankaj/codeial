const express = require('express');
const app = express();
const port= 8080;

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('./assets/'));


app.use('/', require('./routes'));

const db = require('./config/mongoose')

//extracts style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
    if(err){
        console.log(`There is error in runnnig  in server ${err}`);
    }

    console.log(`server is up and running on PORT: ${port}`);
});
