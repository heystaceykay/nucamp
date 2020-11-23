import * as ActionTypes from './ActionTypes';

//all reducers take 2 parameters
//previous state aka existing/current state
//
export const Comments  = (state = { errMess: null, comments: [] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMesss: action.payload};
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            // comment.id = state.comments.length;
            // comment.date = new Date().toISOString();
            //use concat instead of push because push mutates the original array
            return {...state, comments: state.comments.concat(comment) };
        default:
            return state;
    }
};