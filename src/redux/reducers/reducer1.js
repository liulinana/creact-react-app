import { VisibilityFilters } from '../actions'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    visibilityFilter: VisibilityFilters,
    todos: []
};
const { SHOW_ALL } = VisibilityFilters;


export function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
