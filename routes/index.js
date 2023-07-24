//importing module
const express = require('express');

//creating express Router
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home); //It handles home Page
router.use('/users', require('./users')) // Its handles others like (/users/whateverNextComes)

module.exports = router;