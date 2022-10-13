const db= require('../db/db')
const express = require('express')
const router= express.Router()
const controller = require('../controllers/controller')

router.get('/superheroes', controller.getAllSuperheroes)
router.post('/superheroes', controller.getAllSuperheroes)
router.put('/superheroes/:id', controller.getAllSuperheroes)
router.delete('/superheroes/:id', controller.getAllSuperheroes)



module.exports =router