import React from 'react';
import styles from '../homePage/homePage.module.css'
import { getPage } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function paginator(lista, perPage = 9) {
    const pages = [];
    for (let inicio = 0; inicio < lista.length - 1; inicio=inicio+perPage) {
        const final = inicio + perPage;
        pages.push(lista.slice(inicio, final))
    }
   
    const pageNumbers = Math.ceil(lista.length / perPage);

    return {
        perPage: perPage, //9
        pageNumbers: pageNumbers, //8
        currentPage: 1,
        pages: pages 
    };
}

function paginatorNav(paginador, currentPage) {
    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers);
    //currentPage = 1;
    // "<< [1] [*2*] [3] >>"
    const handlePages = (event) => {
        currentPage = parseInt(event.target.text);
        dispatch(getPage(currentPage))
    }

    const handleIncrement = (event) => {
        dispatch(getPage(currentPage + 1))
    }

    const handleLastPage = (event) => {
        currentPage = paginator(allDrivers).pageNumbers;
        dispatch(getPage(currentPage));
    }

    const handleDecrement = (event) => {
        dispatch(getPage(currentPage - 1))
    }

    const handleFirstPage = (event) => {
        currentPage = 1;
        dispatch(getPage(currentPage))
    }

    return(
        <ul className={`${styles.pagination} ${styles.modal_5}`}>
          <li><a href="#" onClick={handleFirstPage} className={` ${styles.prev} ${styles.fa}`}>|&laquo;</a></li>
          <li><a href="#" onClick={handleDecrement} className={` ${styles.prev} ${styles.fa}`}>&laquo;</a></li>

          <div>
          {paginator(allDrivers).pages.map((p, index) => {
            if(currentPage === (index + 1)) {
                return <li><a href="#" className={styles.active}>{index + 1}</a></li>
            } else {
                return <li><a href="#" onClick={handlePages}>{index + 1}</a></li>
            }
            })
          }
          </div>

          <li><a href="#" onClick={handleIncrement} className={` ${styles.next} ${styles.fa}`}>&raquo;</a></li>
          <li><a href="#" onClick={handleLastPage} className={` ${styles.next} ${styles.fa}`}>&raquo;|</a></li>
        </ul>
    );
    
    
}

export {
    paginator,
    paginatorNav
}