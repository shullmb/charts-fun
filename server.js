const express = require('express');
require('dotenv').config();
const db = require('./models');
const layouts = require('express-ejs-layouts');
const bp = require('body-parser');
const app = express();

const port = process.env.PORT || 1000;

app.set('view engine', 'ejs');
app.use(layouts);
app.use(bp.urlencoded({extended: false}));
app.use(express.static(__dirname + "/static"));




const server = app.listen(port, function() {
    console.log("Running and runnning on: " + port);
})

module.exports = server;