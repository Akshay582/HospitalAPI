const express = require('express');
const app = express();
const port = 8000;
const mongoDB = require('./config/mongoose');

app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err)
        console.log(`Error while trying to run the server: ${err}`);
    console.log(`Port: ${port}`);
});