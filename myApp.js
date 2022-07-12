let express = require('express');
let app = express();
const dotenv = require('dotenv').config();
const helloJson = "Hello json";
const filePath = __dirname + '/views/index.html'; 

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

console.log(MESSAGE_STYLE);

app.use('/public', express.static(__dirname + '/public'));

app.use('/json', (req, res) => {
  const message = MESSAGE_STYLE === 'uppercase' ? helloJson.toUpperCase() : helloJson;
  const data = { "message": message };
  res.json(data);
})

app.get('/', (req, res) => res.sendFile(filePath));




































 module.exports = app;
