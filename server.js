const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/listings/:id', express.static(path.join(__dirname, 'client')));

app.get('/listings/:id/reservations', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://13.57.206.173/listings/${id}/reservations`);
});

app.get('/listings/:id/listings', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/listings`);
});

app.get('/listings/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/reviews`);
});

app.get('/listings/:id/description', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.16.13.208/listings/${id}/description`);
});

app.listen(port, host);
console.log(`server running at: http://${host}:${port}`);