const express = require('express')
const router = express.Router()

// the Book collection
const Book = require('../models/book')

router.get('/', async (req, res) => {
  let books
  try {
    // get up to 10 of the most recently added books
    books = await Book.find().sort({ createAt: 'desc' }).limit(10).exec()
  } catch {
    // if there's an error, don't return any books
    books = []
  }
  // render the home page (index.ejs in /views) and pass in the books selected in query above
  res.render('index', { books: books })
})

module.exports = router
