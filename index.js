const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dogRouter = require('./routes/dogs')

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(dogRouter)
// routers can be comma separated

app.listen(port, () => `listening on port ${port}`);