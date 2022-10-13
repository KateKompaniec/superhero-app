const db= require('../db/db')
const express = require('express')
const router= express.Router()

router.get('/', getAllSuperheroes)

function getAllSuperheroes (req,res) {
    res.status(200).json({message: 'It`s all right!'})
}

module.exports =router