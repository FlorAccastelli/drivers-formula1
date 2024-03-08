import React, { useEffect } from "react";
// import fakeCards from "../../fakeCards";
import { paginator, paginatorNav } from "../utils/paginator";
import { Card } from "../card/Card";
import styles from '../homePage/homePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getPage } from "../../redux/actions";

function Cards (props) {
    const allDrivers = useSelector((state) => state.allDrivers);
    console.log(allDrivers);
    const driversPage = useSelector((state)=> state.driversPage) //es lo mismo que el mapStateToProps
    console.log(driversPage)
    const currentPage = useSelector((state)=> state.currentPage)
    console.log(currentPage);
    const dispatch = useDispatch(); //es lo mismo que el mapDispatchToProps

    const pagCards = paginator(allDrivers)
   

    useEffect(()=> {
        dispatch(getPage(2))
        dispatch(getDrivers())
    }, [currentPage])

    return(
    <div>
        <div className={styles.driver_cards}>
          {driversPage.map(c=> 
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