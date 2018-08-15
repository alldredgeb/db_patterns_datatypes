//IMPORTS / REQUIRES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

//VARIABLES
const app = express();
const port = 3010;

//FUNCTIONS
function engagingTheDatabase(req, res, next) {
  console.log('Engaging The Database!');
  next();
}

function onPostNotification(req, res, next) {
  console.log('Ooo! A post is happening!');
  next();
}

//TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
app.use(engagingTheDatabase);

massive(process.env.CONNECTION_STRING).then(function(db) {
  app.set('db', db);
});

//ENDPOINTS
app.post('/api/addanswers', onPostNotification, (req, res) => {
  app.get('db').addAnswers(req.body.light, req.body.gravity).then( () => {
    res.status(200).send("answers added!");
  }).catch( error => {
    console.log('add answers to db error', error);
    res.status(500).send(error);
  })
});

//LISTEN
app.listen(port, () => console.log(`listening on port ${port}!`));