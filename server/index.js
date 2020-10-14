const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller.js');
// const http = require('http');
// app.set('trust proxy', 'localhost');
let port = 3030;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/kix', (req, res) => {
  controller.getImageCarousel(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/sidebar/summary', (req, res) => {
  controller.getSidebarSummary(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/api/reviews', (req, res) => {
  controller.getReviews(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.post('/kix', (req, res) => {
  controller.queryShoeStyle(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
app.post('/sidebar/summary', (req, res) => {
  controller.querySidebar(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log('gotit', data);
      res.send(data);
    }
  });
});
app.post('/api/reviews', (req, res) => {
  controller.queryReviews(req, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log('gotit', data);
      res.send(data);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${port}`);
  }
});