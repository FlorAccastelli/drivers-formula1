import { GET_DRIVERS, GET_PAGE, RESET, SORT_BY_DOB_ASC, SORT_BY_DOB_DESC, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC } from './actionTypes'
import fakeCards from '../fakeCards';

export const getDrivers = () => {
    return (dispatch) => {
        try {
            return dispatch ({
                type: GET_DRIVERS,
                payload: fakeCards,
            });
        }catch(error){
            alert(error.message);
        }
    }
}

export const getPage = (pageNumber) => {
    return {
        type: GET_PAGE,
        payload: pageNumber
    }
}

export const sortByNameAsc = () => {
    return {
        type: SORT_BY_NAME_ASC,
    }
}

export const sortByNameDesc = () => {
    return {
        type: SORT_BY_NAME_DESC
    }
}

export const sortByDobAsc = () => {
    return {
        type: SORT_BY_DOB_ASC
    }
}

export const sortByDobDesc = () => {
    return {
        type: SORT_BY_DOB_DESC
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}
