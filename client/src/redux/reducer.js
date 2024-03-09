import { GET_DRIVERS, GET_PAGE, SORT_BY_NAME_ASC } from "./actionTypes";
import fakeCards from "../fakeCards";
import { paginator } from "../components/utils/paginator";


const initialState = {
    allDrivers: fakeCards,
    currentPage: 1, 
    driversPage: paginator(fakeCards).pages[0],
}

function reducer(state = initialState, { type, payload }) {
    switch(type){
        case GET_DRIVERS:
            return {
                ...state, 
                allDrivers: payload
            }
        case GET_PAGE:
            return {
                ...state,
                driversPage: paginator(state.allDrivers).pages[payload - 1],
                currentPage: payload
            }
        case SORT_BY_NAME_ASC:
            const orderNameAsc = state.allDrivers.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
            return {
                ...state,
                driversPage: paginator(orderNameAsc).pages[0],
                currentPage: 1
            }
        default: 
            return state;
    }
}

export default reducer;