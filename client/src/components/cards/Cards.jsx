import React from "react";
import fakeCards from "../../fakeCards";
import styles from '../homePage/homePage.module.css'
import { paginator, paginatorNav } from "../utils/paginator";

// import { Card } from "../card/Card";
const pagCards = paginator(fakeCards)
const Cards = pagCards.pages[0].map(c=> 
    <div className={styles.flip_card}>
       <div className={styles.flip_card_inner}>
         <div className={`${styles.driver_card} ${styles.card_background}`} key={c.id}>
          <div className={styles.overlay_name}>
            <div className={styles.first_name}>{c.name.forename} {c.name.surname}</div>
            <p className={styles.first_name}> <b>Teams:</b> {c.teams}</p>
          </div>
          <img className={styles.driver_image_layer} src={c.image.url}></img>
         </div>
         <div className={`${styles.details_card}`} >
          <div className={`${styles.details_inner}`} >
            <div className={`${styles.detail_name}`} >{c.name.forename}</div>
          </div>
         </div>
       </div>
    </div>)
return(
    <div>
        <div className={styles.driver_cards}>
          {Cards}
        </div>
      <div>
        {paginatorNav(pagCards)}
      </div>
    </div>  
)

export default Cards;