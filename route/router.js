const express = require('express')
const router = express.Router()

const homeController = require ('../controllers/homeController')
const notFoundController = require ('../controllers/notFoundController')
const registerController = require ('../controllers/registerController')

//HOME, 404 handeling
router.get('/',homeController.getHome)
router.get('*',notFoundController.getNotFound)

//POST ROUTE
router.post('/register',registerController.createUser)


//router.post('/new',userController.createUser)

//router.get('/user/:id',userController.findUserById)

module.exports = router