import React from 'react';
import styles from '../homePage/homePage.module.css'

function paginator(lista, perPage = 9) {
    const pages = [];
    for (let inicio = 0; inicio < lista.length - 1; inicio=inicio+perPage) {
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
    // "<< [1] [*2*] [3] >>"
    var stringArmado = ""
    for (let i = 1; i <= paginador.pages.length; i++) {
        if (i === currentPage) {
            stringArmado = stringArmado + `[*${i}*]`;
        } else {
            stringArmado = stringArmado + `<li> <a href="#">${i}</li>`;
        }
    }
    //return "<< " + [stringArmado] + " >>";
    if (currentPage === 1) {
        return `${stringArmado} >>`;
    }
    if (currentPage === paginador.pages.length) {
        return `<< ${stringArmado}`;
    }

    return(
        <ul className={`${styles.pagination} ${styles.modal_5}`}>
          <li><a href="#" className={` ${styles.prev} ${styles.fa}`}>|&laquo;</a></li>
          <li><a href="#" className={` ${styles.prev} ${styles.fa}`}>&laquo;</a></li>
 
          <li> <a href="#" className={styles.active}>1</a></li>
          <li> <a href="#" >2</a></li>
          <li> <a href="#">3</a></li>
          <li><a href="#" className={` ${styles.next} ${styles.fa}`}>&raquo;</a></li>
          <li><a href="#" className={` ${styles.next} ${styles.fa}`}>&raquo;|</a></li>
        </ul>
    );
    
    
}

export {
    paginator,
    paginatorNav
}