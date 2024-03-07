import { GET_DRIVERS } from './actionTypes'
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