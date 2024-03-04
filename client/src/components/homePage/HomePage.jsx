import React from "react";
import fakeCards from "../../fakeCards";
import styles from './homePage.module.css'
  
  export default function HomePage() {
    const Cards = fakeCards.map(c=> 
        <div className={styles.card} key={c.id}>
            <p>{c.name.forename}</p>
            <img className={styles.cardImage} src={c.image.url}></img>
            <p> <b>Teams:</b> {c.teams}</p>
        </div>)

    return(
        <div>
          {Cards}
        </div>  
    )
  }

