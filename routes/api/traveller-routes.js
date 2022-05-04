const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');



router.get('/', async (req, res) => {
    try {
        const travellers = await Traveller.findAll({
            include: [{ model: Trip }]
        });
        res.json(travellers);
    } catch (err) {
        res.status(500).json(err);
    }
});

