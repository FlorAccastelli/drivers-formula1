const axios = require('axios');
const defaultImage = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/08/17099126193794.jpg';
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
    try {
        let url;
        let queryCondition = {raw: true};
        if (req.query.name) {
            let nameByQuery = req.query.name.toLowerCase()
            nameByQuery = nameByQuery[0].toUpperCase() + nameByQuery.slice(1);

            url = `http://localhost:5000/drivers?name.forename=${nameByQuery}`;
            queryCondition = { where: {name: nameByQuery}, raw: true}
        } else {
            url = 'http://localhost:5000/drivers';

        }
        
        const response  = await axios.get(url);

        const driversDB = (await Driver.findAll(queryCondition)).map((driver) => {
            return ({
            id: driver.id, 
            name: {forename:driver.name, 
                    surname: driver.surname},
            image: {url: driver.image},
            dob: driver.dob,
            nationality: driver.nationality,
            teams: driver.teams,
            description: driver.description,
            fromDB: true
            })
        })
        
            const driversAPI = response.data.map(({ id, name, image, dob, nationality, teams, description }) => ({
                id,
                name,
                image: image || defaultImage,
                dob,
                nationality,
                teams,
                description,
                fromDB: false
            }));

            
            console.log(driversAPI)
            return res.status(200).json([...driversDB, ...driversAPI])
  
           // return res.status(404).send("No existe un driver con ese nombre");

    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = getDrivers;


