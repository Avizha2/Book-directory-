const express = require('express');
const port = 8080;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/api/v1/books', books);

// app.get('/api/v1/books', function(req, res){
//   res.send("Hello from the root application URL");
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
