const URL = 'http://localhost:5000/drivers';
const axios = require('axios');
const { Team } = require('../db')

const getTeams = async (req, res) => {
    try {
        const { data } = await axios.get(URL);
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No se encontraron conductores." });
        }
        
        const allTeams = data.map(driver => driver.teams ? driver.teams.split(',').map(team => team.trim()) : []).flat();
        const uniqueTeams = [...new Set(allTeams)];

         let teams = await Promise.all(uniqueTeams.map(async t => {
            try{
                return await Team.findOrCreate({ where: { name: t } });
            }catch (error){
                console.error("Error al encontrar o crear el equipo:", error);
            }
        })); 
        teams = await Team.findAll({raw: true})

        return res.status(200).json(teams.slice(0, 300));
    } catch (error) {
        console.error("Error al obtener los equipos:", error);
        return res.status(500).json({ message: "Error al obtener los equipos." });
    }
};

module.exports = getTeams;
