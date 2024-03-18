import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import styles from './detail.module.css'

function Detail() {
    const { id } = useParams();

    const [ driver, setDriver] = useState({})

    const URL = "http://localhost:3003/drivers/"

    useEffect(()=>{
        axios.get(`${URL}${id}`)
        .then(({ data })=>{
            if(data.id) setDriver(data)
            else alert('No hay personajes con ese ID')
        })
        // .catch(error => console.error(error));
    }, [id]);

  return <div className={`${styles.container} ${styles.detailContainer}`}>
    <h2>{ driver.id }</h2>
    <h2>{driver.name && `${driver.name.forename} ${driver.name.surname}`} </h2>
    <h4>{ driver.nationality }</h4>
    <h4>{ driver.dob }</h4>
    <h4>{ driver.description }</h4>
    <h4>{ driver.teams }</h4>
    <img className={styles.detailImage} src={driver.image && driver.image.url} alt={driver.name && `${driver.name.forename} ${driver.name.surname}`} />
    <br />
    <Link to={'/home'}>
      <button>Back home</button>
    </Link>

  </div>;
}

export default Detail;