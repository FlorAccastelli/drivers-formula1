import React, { useEffect } from "react";
// import fakeCards from "../../fakeCards";
import { paginator, paginatorNav } from "../utils/paginator";
import { Card } from "../card/Card";
import styles from '../homePage/homePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";

function Cards (props) {
    const allDrivers = useSelector((state) => state.allDrivers); //es lo mismo que el mapStateToProps
    const dispatch = useDispatch();

    const pagCards = paginator(allDrivers)
    const drivers = pagCards.pages[0]

    useEffect(()=> {
        dispatch(getDrivers())
    }, [])

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