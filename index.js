const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(cors());

app.get('/', (req, res) => res.json({ number: 1 }));

app.get('/multiple', (req, res) => res.json(
  {
    number: 1,
    name: 'John',
    gender: 'male'
  },
));

// Setting the server to listen at port 3000
app.listen(port, (req, res) => console.log(`Server is running at port ${port}`));
