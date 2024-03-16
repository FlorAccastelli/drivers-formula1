import { FILTER_BY_TEAM, GET_DRIVERS, GET_PAGE, RESET, SORT_BY_DOB_ASC, SORT_BY_DOB_DESC, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, SEARCH_BY_NAME, FILTER_BY_ORIGIN } from './actionTypes'
import axios from 'axios';
const ENDPOINT_DRIVERS = "http://localhost:3003/drivers"
const ENDPOINT_NAME = "http://localhost:3003/drivers?name="

export const getDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(ENDPOINT_DRIVERS);
            return dispatch ({
                type: GET_DRIVERS,
                payload: data,
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

export const filterByTeam = (team) => {
    return {
        type: FILTER_BY_TEAM,
        payload: team
    }
}

export const searchByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT_NAME}${name}`);
            return dispatch ({
                type: SEARCH_BY_NAME,
                payload: data
            });
        }catch(error){
            alert(error.message);
        }
    }
}

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}