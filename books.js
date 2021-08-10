const express = require('express');
const router = express.Router();
var filename = './books.json';
const books = require(filename);
var jsonfile = require('jsonfile');

    

    
// Get all the books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(books.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  books.push(body);
  // var newId = req.body.id;
  // var newName = req.body.name;
  // var newAuthor = req.body.author;

  // jsonfile.readFile(filename, function(err, obj) {
  //   var fileObj = obj;
  //   var data = {
  //       id: newId,
  //       name: newName,
  //       author: newAuthor,

  //   };
  //   fileObj.push(data);

  //   jsonfile.writeFile(filename, fileObj, function(err) {
  //       if (err) throw err;
  //   });
  // });
  res.json({ message: 'The book has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books[index] = body;
    }
  });
  res.json({ message: `The book with ID ${id} has been updated` });
  // res.json(books);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books.splice(index);
    }
  });
  res.json({ message: `Book with id #${id} has been deleted` });
});

module.exports = router;
