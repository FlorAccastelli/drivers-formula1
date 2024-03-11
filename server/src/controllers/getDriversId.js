const URL = 'http://localhost:5000/drivers/';
const axios = require('axios');

const getDriversId = async (req, res) => {
    try{
        const driverId = req.params.idDriver;
        console.log(req.params)
        console.log(`Hola, soy el driverId ${driverId}`)
        const { data } = await axios(`${URL}${driverId}`);
        

        if (data && data.id) {
            const { id, name, image, dob, nationality, teams, description } = data;
            const driver = { id, name, image, dob, nationality, teams, description };
            return res.status(200).json(driver)
        } else {
            return res.status(404).send("Driver no encontrado")
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports = getDriversId;