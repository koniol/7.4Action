import {ADD_COMMENT} from './actions'
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});


const initialState = {
    comments: [],
    users: []
};

// function app(state = initialState, action) {
//     return {
//         comments: comments(state.comments, action),
//         users: users(state.users, action)
//     };
// }
