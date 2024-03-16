const axios = require('axios');
const defaultImage = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/08/17099126193794.jpg';
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
    try {
        let url;
        if (req.query.name) {
            let nameByQuery = req.query.name.toLowerCase()
            nameByQuery = nameByQuery[0].toUpperCase() + nameByQuery.slice(1);
            url = `http://localhost:5000/drivers?name.forename=${nameByQuery}`;
        } else {
            url = 'http://localhost:5000/drivers';
        }
        
        const response  = await axios.get(url);
        //const driversDB = await Driver.findAll({raw: true});


        const driversDB = (await Driver.findAll({raw: true})).map((driver) => {
            return ({
            id: driver.id, 
            name: {forename:driver.name, 
                    surname: driver.surname},
            image: {url: driver.image},
            dob: driver.dob,
            nationality: driver.nationality,
            teams: driver.teams,
            description: driver.description
            })
        })
        
        
            const driversAPI = response.data.map(({ id, name, image, dob, nationality, teams, description }) => ({
                id,
                name,
                image: image || defaultImage,
                dob,
                nationality,
                teams,
                description
            }));

            
            console.log(driversAPI)
            return res.status(200).json([...driversDB, ...driversAPI])
  
           // return res.status(404).send("No existe un driver con ese nombre");

    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = getDrivers;


