const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
const knex = require('knex');
const config = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = knex(config);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/dogs', (_, response) => {
  database('dogs')
    .then(dogs => response.json({ dogs }));
});

app.post('/dogs', (request, response) => {
  const { name, age } = request.body;
  database('dogs')
    .insert({ name, age })
    .returning(['name', 'age'])
    .then(dog => response.json(dog[0]));
});

app.listen(port, () => `listening on port ${port}`);