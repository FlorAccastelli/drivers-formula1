const { Driver, Team } = require('../db')

const postDrivers = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, dob } = req.body;

        if(![name, surname, description, image, nationality, dob].every(Boolean)) return res.status(401).json({ massage: "Faltan datos" });

        await Driver.findOrCreate({ where: {
            name, surname, description, image, nationality, dob
        } })

        const allDriver = await Driver.findAll;
        console.log(allDriver);

        return res.status(200).json(allDriver);

    }catch(error) {
        console.log(error)
    }
}

module.exports = postDrivers;