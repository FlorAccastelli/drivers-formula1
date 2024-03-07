import React from "react";
import fakeCards from "../../fakeCards";
import { paginator, paginatorNav } from "../utils/paginator";
import { Card } from "../card/Card";
import styles from '../homePage/homePage.module.css';

function Cards () {
    const pagCards = paginator(fakeCards)
const drivers = pagCards.pages[0]
return(
    <div>
        <div className={styles.driver_cards}>
          {drivers.map(c=> 
          (<Card 
            key={c.id}
            id={c.id}
            forename={c.name.forename}
            surname={c.name.surname}
            teams={c.teams}
            image={c.image.url}
        />))}
        </div>
      <div>
        {paginatorNav(pagCards)}
      </div>
    </div>  
)
}


export default Cards;