const { Router } = require("express");
const getDrivers = require('../controllers/getDrivers');
const getDriversId = require('../controllers/getDriversId');
const getTeams = require('../controllers/getTeams');
const postDrivers = require('../controllers/postDrivers');
const postTeams = require("../controllers/updateTeams");

const router = Router();


router.get('/drivers', getDrivers);
router.get('/drivers/:id', getDriversId);
router.get('/teams', getTeams);
router.post('/drivers', postDrivers);
router.get('/postteams', postTeams);

module.exports = router;
