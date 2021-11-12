const express = require('express')
const router = express.Router()

const homeController = require ('../controllers/homeController')
const notFoundController = require ('../controllers/notFoundController')
//home route

router.get('/',homeController.getHome)
router.get('*',notFoundController.getNotFound)
//Manage not found pages
//router.get('*',notFoundController.get404)

//post and get route
//router.post('/new',userController.createUser)

//router.get('/user/:id',userController.findUserById)

module.exports = router