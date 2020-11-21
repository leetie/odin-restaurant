
//create express app
const express = require('express');
const app = express();
const path = express.path;
// express middleware
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static('assets'));
app.use(express.static('dist'));
app.use(express.static('assets'));

//define route
app.get('/', (req, res) => {
  res.sendFile('./dist/index.html');
});

//server
app.listen(process.env.PORT || 3000, 
  () => console.log('server running'));