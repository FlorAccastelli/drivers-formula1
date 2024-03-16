import React from "react";
import styles from "./createDriver.module.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import validation from "./validation";

export default function CreateDriver() {
    const [driverData, setDriverData] = useState({ 
        name: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        description: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setErrors(validation({...driverData, [event.target.name]:event.target.value }))
        setDriverData({...driverData, [event.target.name]:event.target.value })
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:3003/drivers', driverData)
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
        <div className={styles.background}>
            <form onSubmit={handleSubmit} className={styles.container}>
                <label>
                    Name:
                    <input type="text" placeholder="Ingrese un nombre" id="name" name="name" value={driverData.name} onChange={handleChange} className={ errors.name && styles.warning }/>
                    
                </label>
                { errors.name && <p className={styles.danger}>{errors.name}</p> } 
                <br />
                <label>
                    Surname:
                    <input type="text" placeholder="Ingrese un apellido" id="surname" name="surname" value={driverData.surname} onChange={handleChange} className={ errors.surname && styles.warning }/>
                    
                </label>
                { errors.surname && <p className={styles.danger}>{errors.surname}</p> } 
                <br />
                <label>
                    Nationality:
                    <input type="text" placeholder="Ingrese un país" id="nationality" name="nationality" value={driverData.nationality} onChange={handleChange} className={ errors.nationality && styles.warning }/>
                </label>
                { errors.nationality && <p className={styles.danger}>{errors.nationality}</p> } 
                <br />
                <label>
                    Image:
                    <input type="url" placeholder="Ingrese la URL de la imagen" id="image" name="image" value={driverData.image} onChange={handleChange} className={ errors.image && styles.warning }/>
                </label>
                { errors.image && <p className={styles.danger}>{errors.image}</p> } 
                <br />
                <label>
                    Dob:
                    <input type="date" placeholder="Fecha de nacimiento" id="dob" name="dob" value={driverData.dob} onChange={handleChange} className={ errors.dob && styles.warning }/>
                </label>
                { errors.dob && <p className={styles.danger}>{errors.dob}</p> } 
                <br />
                <label>
                    <textarea name="description" rows="6" cols="20" value={driverData.description} onChange={handleChange} className={ errors.description && styles.warning } placeholder="Describa a su driver"></textarea>
                </label>
                { errors.description && <p className={styles.danger}>{errors.description}</p> } 
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
