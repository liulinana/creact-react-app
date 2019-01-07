import { VisibilityFilters } from '../actions'
import { SET_VISIBILITY_FILTER } from '../actionTypes';

const initialState = {
    visibilityFilter: VisibilityFilters,
    todos: []
};


export function visibilityFilter(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
