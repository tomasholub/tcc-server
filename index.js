const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.json({
    number: 1
  });
});

app.get('/multiple', function(req, res) {
  res.json({
    number: 1,
    name: 'John',
    gender: 'male'
  });
});

// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});
