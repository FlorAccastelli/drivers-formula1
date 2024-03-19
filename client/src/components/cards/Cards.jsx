import React, { useEffect, useState } from "react";
import { paginator, paginatorNav } from "../utils/paginator";
import { Card } from "../card/Card";
import styles from '../homePage/homePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getPage } from "../../redux/actions";
import { Link } from 'react-router-dom';

function Cards (props) {
    const allDrivers = useSelector((state) => state.allDrivers);
    const driversPage = useSelector((state)=> state.driversPage)
    let currentPage = useSelector((state)=> state.currentPage)
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(getPage(currentPage))
    }, [])

    const pagCards = paginator(allDrivers)

      return(
        <div>
            <div className={styles.driver_cards}>
              {driversPage && driversPage.map(driver => (
                <Link key={driver.id} to={`/detail/${driver.id}`}>
                  <Card 
                    forename={driver.name && driver.name.forename}
                    surname={driver.name && driver.name.surname}
                    teams={driver.teams}
                    image={driver.image && driver.image.url}
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