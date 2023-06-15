const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
            followed: false,
            fullName: 'Ivan',
            status: 'I learn React',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
            followed: true,
            fullName: 'Jon',
            status: 'I live in NYC',
            location: {city: 'NYC', country: 'USA'}
        },
        {
            id: 3,
            photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
            followed: false,
            fullName: 'Alexa',
            status: 'I am Alexa',
            location: {city: 'WWW', country: 'Internet'}
        },
        {
            id: 4,
            photoUrl: 'https://thumbs.dreamstime.com/b/smart-man-nice-thoughtful-handsome-man-looking-you-standing-shadow-nice-thoughtful-handsome-man-looking-you-125924611.jpg',
            followed: true,
            fullName: 'Sara',
            status: 'I Chicago',
            location: {city: 'Chicago', country: 'USA'}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: {...state, users: [...state.users, ...action.users]}
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;