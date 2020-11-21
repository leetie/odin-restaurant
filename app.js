
// create express app
const express = require('express');
const app = express();
const path = express.path;

// express middleware
app.use(express.static('dist'));
app.use(express.static('assets'));

// define route
app.get('/', (req, res) => {
  res.sendFile('./dist/index.html');
});

app.get('*', function(req, res){
  res.send('Invalid URL');
});

// server
app.listen(process.env.PORT || 3000, 
  () => console.log('server running'));