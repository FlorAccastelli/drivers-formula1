const URL = 'http://localhost:5000/drivers/';
const axios = require('axios');
const { Driver } = require('../db')

const getDriversId = async (req, res) => {
    try{
        const driverId = req.params.id;
    
        if(req.params.id.includes("-")) {
            let driverDB = await Driver.findByPk(driverId)
                    
            if(driverDB) {
                const { id, name, surname, image, dob, nationality, teams, description } = driverDB.dataValues;
                const img = {url: image}
                const nameDriver = {forename: name, surname: surname}
                const driver = { id, name, dob, nationality, teams, description };
                driver.image = img;
                driver.name = nameDriver;
                return res.status(200).json(driver)
            }
        } else {
            const { data } = await axios(`${URL}${driverId}`);
            if (data && data.id) {
                const { id, name, image, dob, nationality, teams, description } = data;
                const driver = { id, name, image, dob, nationality, teams, description };
                return res.status(200).json(driver)
            }
        }
         
            
        return res.status(404).send("Driver no encontrado")
    } catch(error) {

        res.status(500).send(error);
    }
}

module.exports = getDriversId;