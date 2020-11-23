import { PARTNERS } from '../shared/partners';

//all reducers take 2 parameters
//previous state aka existing/current state
//
export const Partners  = (state = PARTNERS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};