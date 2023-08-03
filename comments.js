// Create web server and use express module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a comments array
let comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Mary', message: 'World' }
];

// Set the template engine to ejs
app.set('view engine', 'ejs');

// Set the template directory to /views
app.set('views', 'views');

// Use body-parser module to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// Handle GET request to root directory
app.get('/', (req, res) => {
  res.render('comments', { comments: comments });
});

// Handle POST request to root directory
app.post('/', (req, res) => {
  // Add new comment to comments array
  comments.push({ name: req.body.name, message: req.body.message });
  res.redirect('/');
});

// Start the server and listen on port 3000
app.listen(port, () => console.log(`Server listening on port ${port}!`));application
