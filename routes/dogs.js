const express = require('express');
const database = require('../database/database');
const router = express.Router()
const { getAll, addDog } = require('../database/queries/dogs')

router.get('/dogs', (_, response) => {
    getAll()
        .then(dogs => response.json({ dogs }));
});

router.post('/dogs', (request, response) => {
    addDog(request.body)
        .then(dog => response.json(dog[0]));
});

module.exports = router