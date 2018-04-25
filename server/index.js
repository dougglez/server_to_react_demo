const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();
let array = [1,2,3,4,5,6,7,8,9];
let counter = 0;

app.use(bodyParser.json());

app.get('/api/numbers', function(req, res) {
  res.status(200).send(array);
});

app.post('/api/increment', function(req, res) {
  let { increment } = req.body;
  counter += Number(increment);
  console.log(counter);
  res.status(200).send(counter.toString());
})




app.listen(port, console.log(`Its working!!! ITS WORKING!!! (on ${port})`));