/*Modules*/
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.status(200).json({message: 'Hello World'});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});