import { SKILL_FAILURE, SKILL_REQUEST, SKILL_SUCCESS } from "../actions/actionType";

const initialState = {item: null, loading: false, error: null};

export default function skillReducer(state= initialState, action) {
    switch (action.type) {
        case SKILL_FAILURE:
            const {error} = action.payload; 
            return {...state, loading: false, error};
        case SKILL_REQUEST:
            return {...state, loading: true, error: null};
        case SKILL_SUCCESS:
            const {item} = action.payload;
            return {...state, item, loading: false, error: null};
        default: 
            return state;
    }
    
}