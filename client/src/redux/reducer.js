import { GET_DRIVERS, GET_PAGE, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, SORT_BY_DOB_ASC, SORT_BY_DOB_DESC, RESET, FILTER_BY_TEAM, SEARCH_BY_NAME, FILTER_BY_ORIGIN } from "./actionTypes";
import { paginator } from "../components/utils/paginator";


const initialState = {
    allDrivers: [],
    currentPage: 1, 
    driversPage: [],
    originalSort: [],
    selectedTeam: "",
    selectedOrigin: ""
}

function reducer(state = initialState, { type, payload }) {
    switch(type){
        case GET_DRIVERS:
            return {
                ...state, 
                allDrivers: payload,
                driversPage: paginator(payload).pages[0],
                originalSort: payload
            }
        case GET_PAGE:
            return {
                ...state,
                driversPage: paginator(state.allDrivers).pages[payload - 1],
                currentPage: payload
            }
        case RESET:
            return {
                ...state,
                selectedOrigin: "",
                selectedTeam: "",
                driversPage: paginator(state.originalSort).pages[0],
                allDrivers: [...state.originalSort],
                currentPage: 1
            }
        case SORT_BY_NAME_ASC:
            const orderNameAsc = state.allDrivers.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
            return {
                ...state,
                allDrivers: orderNameAsc,
                driversPage: paginator(orderNameAsc).pages[0],
                currentPage: 1
            }
        case SORT_BY_NAME_DESC:
            const orderNameDesc = state.allDrivers.sort((a, b) => b.name.forename.localeCompare(a.name.forename));
            return {
                ...state,
                allDrivers: orderNameDesc,
                driversPage: paginator(orderNameDesc).pages[0],
                currentPage: 1
            }
        case SORT_BY_DOB_ASC:
            const orderDobAsc = state.allDrivers.sort((a, b) => parseInt(a.dob) - parseInt(b.dob));
            return {
                ...state,
                allDrivers: orderDobAsc,
                driversPage: paginator(orderDobAsc).pages[0],
                currentPage: 1
            }
        case SORT_BY_DOB_DESC:
            const orderDobDesc = state.allDrivers.sort((a, b) => parseInt(b.dob) - parseInt(a.dob));
            return {
                ...state,
                allDrivers: orderDobDesc,
                driversPage: paginator(orderDobDesc).pages[0],
                currentPage: 1
            }
        case FILTER_BY_TEAM:
            let filteredDrivers = [...state.originalSort];

            if(state.selectedOrigin.length > 0) {
                filteredDrivers = filteredDrivers.filter((driver)=> driver.origin && driver.origin === state.selectedOrigin);
            }

            const filteredTeam = filteredDrivers.filter(
                (driver) => driver.teams && driver.teams.includes(payload)
            );
            return {
                ...state,
                selectedTeam: payload,
                driversPage: paginator(filteredTeam).pages[0],
                allDrivers: filteredTeam,
                currentPage:1
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                driversPage: paginator(payload).pages[0],
                currentPage: 1,
                allDrivers: payload
            }
        case FILTER_BY_ORIGIN:

            let filteredDriversByTeam = [...state.originalSort]

            if(state.selectedTeam.length > 0) {
               filteredDriversByTeam = filteredDriversByTeam.filter((driver)=> driver.teams && driver.teams.includes(state.selectedTeam)
            );
            }

            const filteredCards = filteredDriversByTeam.filter((driver)=> driver.origin && driver.origin === payload);

            return {
                ...state,
                selectedOrigin: payload,
                driversPage: paginator(filteredCards).pages[0],
                allDrivers: filteredCards,
                currentPage: 1
            }
        default: 
            return state;
    }
}

export default reducer;