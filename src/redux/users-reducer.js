const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://i.pinimg.com/474x/55/59/40/555940f10a97ea9fc8ad50ea9c452398.jpg',
            followed: false,
            fullName: 'Michael',
            status: 'I am listening music right now!',
            location: {city: 'NYC', country: 'USA'},
        },
        {
            id: 2,
            photoUrl: 'https://www.essence.com/wp-content/uploads/2013/11/images/2013/11/25/phedra_parks_essence_visit.jpg?width=400',
            followed: true,
            fullName: 'Viola',
            status: 'Be yourself!',
            location: {city: 'LA', country: 'USA'},
        },
        {
            id: 3,
            photoUrl: 'https://www.lehighvalleylive.com/resizer/z-0EdCWsiOyWv6dYadFkvoeJFmw=/800x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.lehighvalleylive.com/home/lvlive-media/width2048/img/entertainment_impact/photo/20769691-standard.jpg',
            followed: false,
            fullName: 'Dwayne',
            status: 'What goes around comes around',
            location: {city: 'Chicago', country: 'USA'},
        },
        {
            id: 4,
            photoUrl: 'https://d.ibtimes.com/en/full/1959282/rtr4ms4j.jpg?w=736&f=f5a072bff8220972792052132c5363d9',
            followed: true,
            fullName: 'Jennifer',
            status: 'Work hard!',
            location: {city: 'Hollywood', country: 'USA'},
        }
    ]
}


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
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;