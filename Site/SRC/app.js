const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname);
const mainRouter = require('./routes/mainRouter');
app.set('view engine', 'ejs');
app.set('views', './views');

app.use (express.static(publicPath));

app.use('/', mainRouter);
/* 
app.get ('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/home.html'))
})
app.get ('/register.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/register.html'))
})

app.get ('/login.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/login.html'))
})

app.get ('/shoppingcart.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/shoppingcart.html'))
})

app.get ('/prueba.html', function(req, res){
    res.send (series)
}) */

app.listen (3000, () =>
    console.log('servidor corriendo en 3000!!!')
);


