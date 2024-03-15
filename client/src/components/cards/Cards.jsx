import React, { useEffect, useState } from "react";
import { paginator, paginatorNav } from "../utils/paginator";
import { Card } from "../card/Card";
import styles from '../homePage/homePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getPage } from "../../redux/actions";
import { Link } from 'react-router-dom';

function Cards (props) {
    const allDrivers = useSelector((state) => state.allDrivers);
    const driversPage = useSelector((state)=> state.driversPage) //es lo mismo que el mapStateToProps
    let currentPage = useSelector((state)=> state.currentPage)
    const dispatch = useDispatch(); //es lo mismo que el mapDispatchToProps

    const pagCards = paginator(allDrivers)
   
    useEffect(()=> {
        dispatch(getPage(currentPage))
    }, [currentPage])

    return(
      <div>
          <div className={styles.driver_cards}>
            {driversPage.map(driver => (
              <Link key={driver.id} to={`/detail/${driver.id}`}>
                <Card 
                  forename={driver.name.forename}
                  surname={driver.name.surname}
                  // teams={driver.teams}
                  image={driver.image.url}
                />
              </Link>
            ))}
          </div>
        <div>
          {paginatorNav(pagCards, currentPage)}
        </div>
      </div>  
    );
}

export default Cards;