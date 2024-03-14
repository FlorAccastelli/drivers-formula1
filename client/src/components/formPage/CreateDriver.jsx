import React from "react";
import styles from "./createDriver.module.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateDriver() {
    const [userData, setUserData] = useState({ 
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        description: ""
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]:event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3003/drivers', userData)
            if (response.status === 200) {
                alert("Tu driver se guardó correctamente");
                setUserData({
                    name: "",
                    surname: "",
                    nationality: "",
                    image: "",
                    dob: "",
                    description: ""
                })
            } else {
                throw new Error('Error al guardar tu driver');
            }
        }catch(error){
            console.error('Error al guardar tu driver: ', error)
        }
    }
    
    return (
        <div>
            <h1>CREATE DRIVER</h1>
            <form onSubmit={handleSubmit} className={styles.container}>
                <label>
                    Name:
                    <input type="text" placeholder="Ingrese un nombre" id="name" name="name" value={userData.name} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Surname:
                    <input type="text" placeholder="Ingrese un apellido" id="surname" name="surname" value={userData.surname} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Nationality:
                    <input type="text" placeholder="Ingrese un país" id="nationality" name="nationality" value={userData.nationality} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Image:
                    <input type="url" placeholder="Ingrese la URL de la imagen" id="image" name="image" value={userData.image} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Dob:
                    <input type="date" placeholder="Fecha de nacimiento" id="dob" name="dob" value={userData.dob} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    <textarea name="description" rows="7" cols="30" value={userData.description} onChange={handleChange}>Describa a su driver</textarea>
                </label>
                <br />
                <label>
                    Teams asociados:
                    <select name="select" multiple="multiple" size="5">
                        <option value="8a2277b2-7698-42ad-9845-a916fb3a7737">Veritas</option>
                        <option value="951fbc23-e0c3-44e1-8517-9248408af497">JBW</option>
                        <option value="6b8b719e-072d-478b-a661-0989ded3c015">Talbot-Lago</option>
                    </select>
                </label>
                <br />
                <div className={styles.buttonGroup}>
                    <Link to='/home'>
                        <button className={styles.backButton} name="back">Back home</button>
                    </Link>
                    <button className={styles.createButton} name="button">Create driver</button>
                </div>
            </form>
        </div>
    )
}
