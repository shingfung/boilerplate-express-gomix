let express = require('express');
let app = express();
const dotenv = require('dotenv').config();
const helloJson = "Hello json";
const filePath = __dirname + '/views/index.html'; 
let message;

app.use('/public', express.static(__dirname + '/public'));

app.use('/json', (req, res) => {
  
  message = process.env.MESSAGE_STYLE === 'uppercase' ? helloJson.toUpperCase() : helloJson;
  
  res.json({ "message": message });
})

app.get('/', (req, res) => res.sendFile(filePath));




































 module.exports = app;
