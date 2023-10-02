const express = require('express');
const router = express.Router();

const {getTransactions,addTransactions,deleteTransactions} = require('../controllers/transaction')

router
   .route('/')
   .get(getTransactions)
   .post(addTransactions);

router
   .route('/:id')
   .delete(deleteTransactions)



   //  get method of express is used to define the routes that handle HTTP GET requests.


module.exports = router;