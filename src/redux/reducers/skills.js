import { SKILLS_FAILURE, SKILLS_REQUEST, SKILLS_SUCCESS } from "../actions/actionType";

const initialState = {items: [], loading: false, error: null};

export default function skillsReducer(state= initialState, action) {
    switch (action.type) {
        case SKILLS_FAILURE:
            const {error} = action.payload; 
            return {...state, loading: false, error};
        case SKILLS_REQUEST:
            return {...state, loading:true, error: null};
        case SKILLS_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loading:false, error: null};
        default: 
            return state;
    }
    
}