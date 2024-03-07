import { GET_DRIVERS } from "./actionTypes";


const initialState = {
    allDrivers: []
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