const express = require('express');
const app = express();
const api  =require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'));
app.use('/axios', express.static('./node_modules/axios/dist'));

app.use('/api', api);

app.listen(3000);