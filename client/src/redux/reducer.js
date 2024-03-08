import { GET_DRIVERS } from "./actionTypes";
import fakeCards from "../fakeCards";
// import { paginator } from "../components/utils/paginator";


const initialState = {
    allDrivers: fakeCards,
    // currentPage: paginator(allDrivers).pages[0]
        
}

function reducer(state = initialState, { type, payload }) {
    switch(type){
        case GET_DRIVERS:
            return {
                ...state, 
                allDrivers: payload
            }
        default: 
            return state;
    }
}

export default reducer;