const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname, './Site');

app.use (express.static(publicPath));

app.get ('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/home.html'))
})
app.get ('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/register.html'))
})

app.get ('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./Site/SRC/login.html'))
})


app.listen (3000, () => 
    console.log('servidor corriendo en 3000!!!')
);


