const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/listings/:id', express.static(path.join(__dirname, 'client')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});