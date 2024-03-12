const URL = 'http://localhost:5000/drivers';
const axios = require('axios');

const getTeams = async (req, res) => {
    try {
        const { data } = await axios.get(URL);
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No se encontraron conductores." });
        }
        
        const allTeams = data.map(driver => driver.teams ? driver.teams.split(',').map(team => team.trim()) : []).flat();
        const uniqueTeams = [...new Set(allTeams)]; // Se eliminan los equipos duplicados

        return res.status(200).json(uniqueTeams);
    } catch (error) {
        console.error("Error al obtener los equipos:", error);
        return res.status(500).json({ message: "Error al obtener los equipos." });
    }
};

module.exports = getTeams;
