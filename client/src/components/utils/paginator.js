function paginator(lista, perPage = 3) {
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
            stringArmado = stringArmado + `[${i}]`;
        }
    }
    //return "<< " + [stringArmado] + " >>";
    if (currentPage === 1) {
        return `${stringArmado} >>`;
    }
    if (currentPage === paginador.pages.length) {
        return `<< ${stringArmado}`;
    }
    return `<< ${stringArmado} >>`;
    
    
}

export default paginator;