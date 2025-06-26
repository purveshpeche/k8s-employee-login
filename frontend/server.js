const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.use('/api', (req, res) => {
  const url = 'http://backend:5000' + req.url;
  req.pipe(require('request')(url)).pipe(res);
});

app.listen(3000, () => console.log('Frontend running on 3000'));
