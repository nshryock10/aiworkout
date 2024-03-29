const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../', 'build')));

app.use('/', router)

app.listen(process.env.PORT || PORT, () => {
    console.log("Express server listening on port in %s mode", app.settings.env);
  });