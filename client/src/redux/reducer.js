import { GET_DRIVERS, GET_PAGE, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, SORT_BY_DOB_ASC, SORT_BY_DOB_DESC, RESET, FILTER_BY_TEAM } from "./actionTypes";
import fakeCards from "../fakeCards";
import { paginator } from "../components/utils/paginator";


const initialState = {
    allDrivers: fakeCards,
    currentPage: 1, 
    driversPage: paginator(fakeCards).pages[0],
    originalSort: [...fakeCards],
    // allTeams: ["McLaren", "Mercedes","Prost", "Sauber", "Jordan", "Williams", "BMW", "Renault", "Minardi", "Ferrari", "Alpine"]
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
        case RESET:
            return {
                ...state,
                driversPage: paginator(state.originalSort).pages[0],
                allDrivers: [...state.originalSort],
                currentPage: 1
            }
        case SORT_BY_NAME_ASC:
            const orderNameAsc = state.allDrivers.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
            return {
                ...state,
                driversPage: paginator(orderNameAsc).pages[0],
                currentPage: 1
            }
        case SORT_BY_NAME_DESC:
            const orderNameDesc = state.allDrivers.sort((a, b) => b.name.forename.localeCompare(a.name.forename));
            return {
                ...state,
                driversPage: paginator(orderNameDesc).pages[0],
                currentPage: 1
            }
        case SORT_BY_DOB_ASC:
            const orderDobAsc = state.allDrivers.sort((a, b) => parseInt(a.dob) - parseInt(b.dob));
            return {
                ...state,
                driversPage: paginator(orderDobAsc).pages[0],
                currentPage: 1
            }
        case SORT_BY_DOB_DESC:
            const orderDobDesc = state.allDrivers.sort((a, b) => parseInt(b.dob) - parseInt(a.dob));
            return {
                ...state,
                driversPage: paginator(orderDobDesc).pages[0],
                currentPage: 1
            }
        case FILTER_BY_TEAM:
            const filteredTeam = state.allDrivers.filter(
                (driver) => driver.teams && driver.teams.includes(payload)
            );
            return {
                ...state,
                driversPage: paginator(filteredTeam).pages[0],
                allDrivers: filteredTeam,
                currentPage:1
            }
        default: 
            return state;
    }
}

export default reducer;