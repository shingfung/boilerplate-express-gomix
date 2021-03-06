let express = require('express');
let app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const helloJson = "Hello json";
const filePath = __dirname + '/views/index.html'; 
let message;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get('/now', (req, res, next) => {
  req.time = (new Date()).toString();
  next();
}, (req, res) => res.json({time: req.time}));

app.get('/:word/echo', (req, res) => res.json({echo: req.params.word}));

app.route('/name')
.get((req, res) => res.json({name: `${req.query.first} ${req.query.last}`}))
.post((req, res) => res.json({name: `${req.body.first} ${req.body.last}`}))
;



app.use('/public', express.static(__dirname + '/public'));

app.use('/json', (req, res) => {
  
  message = process.env.MESSAGE_STYLE === 'uppercase' ? helloJson.toUpperCase() : helloJson;
  
  res.json({ "message": message });
})
 
app.get('/', (req, res) => res.sendFile(filePath));




































 module.exports = app;
