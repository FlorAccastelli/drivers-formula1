import { GET_DRIVERS, GET_PAGE } from "./actionTypes";
import fakeCards from "../fakeCards";
import { paginator } from "../components/utils/paginator";


const initialState = {
    allDrivers: fakeCards,
    currentPage: 1, 
    driversPage: paginator(fakeCards).pages[0]
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
                driversPage: payload
            }
        default: 
            return state;
    }
}

export default reducer;