const { Router } = require("express");
const getDrivers = require('../controllers/getDrivers');
const getDriversId = require('../controllers/getDriversId');
const getDriversName = require('../controllers/getDriversName');
const getTeams = require('../controllers/getTeams');
const postDrivers = require('../controllers/postDrivers');

const router = Router();

router.get('/drivers/:idDriver', getDriversId);
router.get('/drivers/name', getDriversName);//!esto preguntar!
router.get('/drivers', getDrivers);
router.get('/teams', getTeams);
router.post('/drivers', postDrivers);

module.exports = router;
