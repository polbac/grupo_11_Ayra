const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname);
const mainRouter = require('./routes/mainRouter');
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use (express.static(publicPath));

app.use('/', mainRouter);


app.listen (process.env.port || 3000, () =>
    console.log('servidor corriendo en 3000!!!')
);


