import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 33},
                {id: 2, message: 'It is my first post!', likesCount: 355},
                {id: 3, message: 'I am going to NYC!!!', likesCount: 876},
                {id: 4, message: 'I wanna visit Australia!', likesCount: 3565},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Jon',
                    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'
                },
                {
                    id: 2,
                    name: 'Barack',
                    photo: 'https://i0.wp.com/www.pd.co.ke/wp-content/uploads/2023/05/images-1-23-1.jpeg'
                },
                {
                    id: 3,
                    name: 'Sara',
                    photo: 'https://drscdn.500px.org/photo/107895083/m%3D900/v2?sig=db6ce39408eadcfa6646323414a80f7302890a8055c3254f5a4d6126d6635461'
                },
                {
                    id: 4,
                    name: 'Christina',
                    photo: 'https://global.1.jccmi.edu/wp-content/uploads/sites/18/2022/05/Executive-Assistant.jpg'
                },
                {
                    id: 5,
                    name: 'Alex',
                    photo: 'https://iso.500px.com/wp-content/uploads/2019/02/500px_blog_licensing_trends_popular_cameras-1500x1000.jpg'
                },
                {
                    id: 6,
                    name: 'Gretchen',
                    photo: 'https://i.pinimg.com/originals/cd/33/5b/cd335b441578f459fa504ffbf6c212f3.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Tell me something about yourself'},
                {id: 4, message: 'When are you going on vocation?'},
            ],
            newMessageBody: '',
        },
        siteBar: {
            friends: [
                {
                    id: 1,
                    name: 'Jacob',
                    imgAva: 'https://cdn.justjared.com/wp-content/uploads/headlines/2022/11/chris-everything-05.jpg',
                },
                {
                    id: 2,
                    name: 'Barack',
                    imgAva: 'https://cdn.justjared.com/wp-content/uploads/headlines/2023/03/twitter-most-02.jpg',
                },
                {
                    id: 3,
                    name: 'Selena',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/dsCqdEx6NSqODU0ihVHSUCDwztk/562x135:2177x1750/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/020/n/1922398/3794d5c55d76e058296c92.97678413_/i/Selena-Gomez.jpg',
                },
                {
                    id: 4,
                    name: 'Kate',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/pTmzoMACFQIa7sZ1NVCbeI5lkjQ/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/917/n/1922398/a23fb7f85b4d07be73b038.17241474_/i/Natalie-Portman.jpg',
                },
                {
                    id: 5,
                    name: 'Jon',
                    imgAva: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'
                },
                {
                    id: 6,
                    name: 'Barack',
                    imgAva: 'https://i0.wp.com/www.pd.co.ke/wp-content/uploads/2023/05/images-1-23-1.jpeg'
                },
                {
                    id: 7,
                    name: 'Sara',
                    imgAva: 'https://drscdn.500px.org/photo/107895083/m%3D900/v2?sig=db6ce39408eadcfa6646323414a80f7302890a8055c3254f5a4d6126d6635461'
                },
                {
                    id: 8,
                    name: 'Christina',
                    imgAva: 'https://global.1.jccmi.edu/wp-content/uploads/sites/18/2022/05/Executive-Assistant.jpg'
                },
                {
                    id: 9,
                    name: 'Alex',
                    imgAva: 'https://iso.500px.com/wp-content/uploads/2019/02/500px_blog_licensing_trends_popular_cameras-1500x1000.jpg'
                },
                {
                    id: 10,
                    name: 'Gretchen',
                    imgAva: 'https://i.pinimg.com/originals/cd/33/5b/cd335b441578f459fa504ffbf6c212f3.jpg'
                },
            ],
        }
    },
    _callSubscriber() {
        console.log('State was changed!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = sidebarReducer(this._state.siteBar, action);

        this._callSubscriber(this._state)
    }
}


window.store = store;

export default store;