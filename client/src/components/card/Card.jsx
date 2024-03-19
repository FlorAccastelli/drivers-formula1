import React from "react";
import styles from '../homePage/homePage.module.css'

export const Card = ({
    id,
    surname,
    forename,
    image,
    teams
}) => {
    return (
        <div className={styles.flip_card}>
          <div className={styles.flip_card_inner}>
          <div className={`${styles.driver_card} ${styles.card_background}`} key={id}>
          <div className={styles.overlay_name}>
          <div className={styles.last_name}>{surname}</div>
          <div className={styles.first_name}>{forename}</div>
          </div>
         
          <img className={styles.driver_image_layer} src={image}></img>
         </div>
         <div className={styles.teams}> {teams}</div>
         <div className={`${styles.details_card}`} >
          <div className={`${styles.details_inner}`} >
          </div>
         </div>
       </div>
    </div>
    )
}