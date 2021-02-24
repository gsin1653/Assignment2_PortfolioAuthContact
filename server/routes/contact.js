let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact');

/* GET Contact us page. */
router.get('/', contactController.displayContactPage);

/* POST from Contact us page. */
router.post('/', contactController.processContactInformation);

/* GET router for the Contact list page */
router.get('/list', contactController.displayContactList);

/* GET router for the ADD Contact page - CREATE */
router.get('/add', contactController.displayAddContact);

/* POST router for the ADD Contact page - CREATE */
router.post('/add', contactController.processContactCreation);

/* GET router for the EDIT Contact page - UPDATE */
router.get('/edit/:id', contactController.displayEditContact);

/* POST router for the EDIT Contact page - UPDATE */
router.post('/edit/:id', contactController.processContactUpdate);

/* GET router for the DELETE Contact page - DELETE */
router.get('/delete/:id', contactController.performContactDeletion);

module.exports = router;