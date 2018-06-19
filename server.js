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

app.get('/', function(req,res) {
    console.log('get /');
    db.poll.aggregate('survey', 'DISTINCT', {plain: false}).then( function(data){
        console.log(data)
        res.render('index', {surveys: data});
    })
})

app.get('/new', function(req,res) {
    console.log('get /new');
    res.render('new');
})

app.post('/', function(req,res) {
    console.log('post poll to /');
    db.poll.create({
      name: req.body.name,
      answer: req.body.answer,
      survey: req.body.survey  
    }).then( function(poll) {
        res.redirect('/');
    })
})

app.get('/detail/:id', function(req,res) {
    console.log('get /detail/:id');
    db.poll.findAll({
        where: {survey: req.params.id}
    }).then( function(data){
        res.render('show', {data});
    })

})


const server = app.listen(port, function() {
    console.log("🏰 Hail his grace, Lord Servingport, the " + port + "th of his name 🏰");
})

module.exports = server;