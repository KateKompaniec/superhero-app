const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')
const uuid = require('uuid')
const path = require('path')

router.get('/superheroes', getAllSuperheroes)
router.get('/superheroes/:nickname', getSuperhero)
router.post('/superheroes', createSuperhero)
router.put('/superheroes/:id', updateSuperhero)
router.delete('/superheroes/:id', deleteHero)


function getAllSuperheroes(req, res) {
    controller.getHeroes()
        .then(data => res.json(data).status(200))
        .catch(err => res.status(500).json({ error: err }))

}


function getSuperhero(req, res) {
    const id = req.params.nickname
    controller.getHeroById()
        .then(data => res.json(data).status(200))
        .catch(err => res.status(500).json({ error: err }))

}

function createSuperhero(req, res) {
    const superhero = req.body
    controller.createHero(superhero)
        .then(res.status(200))
        .catch(err => res.status(500).json({ error: err }))

}

function updateSuperhero(req, res) {
    const superhero = req.body
    controller.updateHero(superhero)
        .then(data => res.json(data).status(200))
        .catch(err => res.status(500).json({ error: err }))

}

function deleteHero(req, res) {
    const id = req.params.id
    controller.deleteHero()
        .then(data => res.json(data).status(200))
        .catch(err => res.status(500).json({ error: err }))

}

module.exports = router