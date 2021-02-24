let express = require('express');
let router = express.Router();

let bookController = require('../controllers/book');

/* GET router for the Book list page */
router.get('/list', bookController.displayBookList);

/* GET router for the ADD Book page - CREATE */
router.get('/add', bookController.displayAddBook);

/* POST router for the ADD Book page - CREATE */
router.post('/add', bookController.processBookCreation);

/* GET router for the EDIT Book page - UPDATE */
router.get('/edit/:id', bookController.displayEditBook);

/* POST router for the EDIT Book page - UPDATE */
router.post('/edit/:id', bookController.processBookUpdate);

/* GET router for the DELETE Book page - DELETE */
router.get('/delete/:id', bookController.performBookDeletion);

module.exports = router;