const URL = "http://localhost:5000/drivers";
const axios = require('axios');
const defaultImage = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/08/17099126193794.jpg'

const getDrivers = async (req, res) => {
    try{
        const { data } = await axios(URL);
        if(data) {
            const drivers = data.map(({ id, name, image, dob, nationality, teams, description }) => ({ 
                id, 
                name, 
                image: image ? image : defaultImage, 
                dob, 
                nationality, 
                teams, 
                description }))
            return driver
            ? res.status(200).json(drivers)
            : res.status(404).send("Información no encontrada")
        }
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

// !FALTA AGREGAR LA DATA BASE!

module.exports = getDrivers;