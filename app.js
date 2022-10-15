const express  =  require('express');
const app      =  express();
const router   = require('./app/Routes/routes');

app.use(express.static(__dirname + '/dist/'));

app.use("/", router)

app.listen(3000, () => {
    console.log("App running on port number 3000")
})