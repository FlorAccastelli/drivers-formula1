const axios = require('axios');
const defaultImage = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/03/08/17099126193794.jpg';

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
        let drivers = [];
        const response = await axios.get(url);
        
        if (response.data) {
            drivers = response.data.map(({ id, name, image, dob, nationality, teams, description }) => ({
                id,
                name,
                image: image ? image : defaultImage,
                dob,
                nationality,
                teams,
                description
            }));
            return res.status(200).json(drivers)
        } else {
            return res.status(404).send("No existe un driver con ese nombre");
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

//             if (req.query.name) {
//                 drivers = drivers.filter((driver) => {
//                     console.log(`driver.name.forename ${driver.name.forename.toLowerCase()}`)
//                     console.log(`req.query.name ${req.query.name.toLowerCase()}`)
//                     driver.name.forename.toLowerCase() === req.query.name.toLowerCase();
//                 });
//             }

//             if (drivers.length > 0) {
//                 return res.status(200).json(drivers);
//             } else {
//                 return res.status(404).send("No existe un driver con ese nombre");
//             }
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error.message);
//     }
// };

module.exports = getDrivers;


