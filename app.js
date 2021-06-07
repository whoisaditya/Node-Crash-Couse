const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');

//Express App
const app = express();

//connect to mongodb 
const dburi = process.env.DB_URI;

mongoose.connect(dbUrI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000)) //listen for requests 
    .catch((err) => console.log(err));

// For the FrontEnd
//app.use(express.static('Fr'))

//Register View Engine
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method :', req.method);
    next();
});

const user = new User({
    username: 'codechef-admin',
    password: '1234',
    link1: 'abc',
    link2: 'xyz',
    link3: 'pqr'    
    });

app.get('/add-User', (req, res) => {
    
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});





app.use(morgan('dev'));

app.get('/',(req, res) => {
    //res.send('<p>home page</p>');
    res.render('index')
});

app.get('/about',(req, res) => {
    //res.send('<p>about page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/about-us',(req, res) => {
    //res.send('<p>about page</p>');
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

