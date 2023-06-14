const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 33, likeState: false},
        {id: 2, message: 'It is my first post!', likesCount: 355, likeState: false},
        {id: 3, message: 'I am going to NYC!!!', likesCount: 876, likeState: false},
        {id: 4, message: 'I wanna visit Australia!', likesCount: 3565, likeState: false},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                likeState: false,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;