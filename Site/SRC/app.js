const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname);
const mainRouter = require('./routes/mainRouter');
app.set('view engine', 'ejs');
app.set('views', './Site/SRC/views');

app.use (express.static(publicPath));

app.use('/', mainRouter);

console.log('usando puerto', process.env.PORT)
app.listen (process.env.PORT || 3000, () =>
    console.log('servidor corriendo en 3000!!!')
);


