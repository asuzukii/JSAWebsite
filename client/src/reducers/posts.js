import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            // return the updated post if id matches, otw
            // just give back the original post
            return posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}

export default reducer;