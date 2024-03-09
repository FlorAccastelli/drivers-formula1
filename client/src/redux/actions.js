import { GET_DRIVERS, GET_PAGE, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC } from './actionTypes'
import fakeCards from '../fakeCards';
import { paginator } from '../components/utils/paginator';

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
