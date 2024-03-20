import React from 'react';
import styles from '../homePage/homePage.module.css'
import { getDrivers, getPage } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function paginator(lista, perPage = 9) {
    const pages = [];
    for (let inicio = 0; inicio <= lista.length - 1; inicio=inicio+perPage) {
        const final = inicio + perPage;
        pages.push(lista.slice(inicio, final))
    }
   
    const pageNumbers = Math.ceil(lista.length / perPage);

    return {
        perPage: perPage, 
        pageNumbers: pageNumbers, 
        currentPage: 1,
        pages: pages 
    };
}

function paginatorNav(paginador, currentPage) {
    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers);
    const handlePages = (event) => {
        const selectedPage = parseInt(event.target.text);
        dispatch(getPage(selectedPage))
    }

    const handleIncrement = (event) => {
        if (currentPage < paginator(allDrivers).pageNumbers) {
            dispatch(getPage(currentPage + 1))
        }
    }

    const handleLastPage = () => {
        const lastPage = paginator(allDrivers).pageNumbers;
        dispatch(getPage(lastPage));
    }

    const handleDecrement = () => {
        if (currentPage >= 2) {
            dispatch(getPage(currentPage - 1))
        }
    }

    const handleFirstPage = () => {
        dispatch(getPage(1))
    }

    return(
        <div className={styles.paginator}>
            <ul className={`${styles.pagination} ${styles.modal_5}`}>
                {currentPage > 1 && 
                <div>
                <li><a href="#" onClick={handleFirstPage} className={` ${styles.prev} ${styles.fa}`}>|&laquo;</a></li>
                <li><a href="#" onClick={handleDecrement} className={` ${styles.prev} ${styles.fa}`}>&laquo;</a></li>
                </div>
                }
          <div>

          {paginator(allDrivers).pages.map((p, index)=> index).slice((currentPage < 2 ? 0 :currentPage - 2), currentPage + 2).map(( index) => {
            if(currentPage === (index + 1)) {
                return <li><a href="#" className={styles.active}>{index + 1}</a></li>
            } else {
                return <li><a href="#" onClick={handlePages}>{index + 1}</a></li>
            }
            })
          }
          </div>
          {currentPage < paginator(allDrivers).pages.length &&
          <div>
          <li><a href="#" onClick={handleIncrement} className={` ${styles.next} ${styles.fa}`}>&raquo;</a></li>
          <li><a href="#" onClick={handleLastPage} className={` ${styles.next} ${styles.fa}`}>&raquo;|</a></li>
          </div>
        }
        </ul>
        </div>
    );
    
    
}

export {
    paginator,
    paginatorNav
}