// Packages
const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

// Read All Aliens
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    }
    catch (error) {
        res.send(error)
    }
});

// Read Alien by id
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }
    catch (error) {
        res.send(error);
    }
})

// Patch Alien - can be used for one field -> 1. We can either check which field has changed, and changes can be reflected || 2. Or we can use PUT instead!
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.active = req.body.active;
        const response = await alien.save();
        res.json(response);
    }
    catch (error) {
        res.send(error)
    }
})

// Create new Alien
router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        language: req.body.language,
        active: req.body.active
    });

    try {
        const response = await alien.save();
        res.json(response);
    }
    catch (error) {
        res.send(error);
    }
});

// Delete Alien
router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.remove();
        res.send("Alien Left!");
    }
    catch (error) {
        res.send(error);
        console.log(error)
    }
})


module.exports = router;