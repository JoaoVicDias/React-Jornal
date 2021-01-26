const express = require('express')
const route = express.Router()
const indexPageController = require('../controllers/indexPage')




// Routes
route.get('/',indexPageController.getIndexpage)
route.post('/',indexPageController.postIndexPageCreate)
route.delete('/:id',indexPageController.DeleteIndexPageClassificados)


module.exports = route