import { VisibilityFilters } from '../actions'
import { ADD_TODO, TOGGLE_TODO,ADD_TODO_S } from '../actionTypes';

const initialState = {
    visibilityFilter: VisibilityFilters,
    todos: [],
    selectsData:"小仙女才能登陆的系统",
};

// export default handleAction ({
//     ADD_TODO(state,action){
//         return [
//             ...state,
//             {
//                 text: action.payload.content,
//                 completed: false
//             }
//         ]
//     },
//     TOGGLE_TODO(state,action){
//         return state.map((todo, index) => {
//             if (index === action.index) {
//                 return Object.assign({}, todo, {
//                     completed: !todo.completed
//                 })
//             }
//             return todo
//         })
//     }
// })
// { handleAction } 导入 'redux-actions';

export function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_S:
            const data = null;
            action.promise().then(res=>({data:res}))
            return {
                ...state,
                selectsData:data ===null?"null":data
            };
        case ADD_TODO:
            return {
                ...state,
                selectsData: action.payload.content
            };
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}


