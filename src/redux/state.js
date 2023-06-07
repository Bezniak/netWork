const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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
                    name: 'Ivan',
                    imgAva: 'https://purepng.com/public/uploads/large/businessman-uq0.png',
                },
                {
                    id: 2,
                    name: 'Brad',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/4UYUg9UKWqqhaFfElFDU9bKMRgQ/356x1145:1857x2646/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/970/n/1922398/cc3fa7b15d70381d55bd82.88203803_/i/Brad-Pitt.jpg',
                },
                {
                    id: 3,
                    name: 'Gaga',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/nf8o4Bk0rix4ozPrPQjL9Bd2dQc/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/921/n/1922398/1669af075b4d08e36a7e01.55365943_/i/Lady-Gaga.jpg',
                },
                {
                    id: 4,
                    name: 'Jon',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/yeuVvYJYc1ZRlG1ueNCE5_OKYSI/342x96:1561x1315/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/864/n/1922398/a621184f5e824c3f1ccfc6.35629064_/i/Jack-Black.jpg',
                },
                {
                    id: 5,
                    name: 'Anne',
                    imgAva: 'https://media1.popsugar-assets.com/files/thumbor/JMhRMtVlDfqCoakr4F5pGgofhiY/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2018/07/13/982/n/1922398/76c8d0aa5b49291da499c5.78417503_/i/Anne-Hathaway.jpg',
                },
                {
                    id: 6,
                    name: 'Cristiano',
                    imgAva: 'https://cdn.justjared.com/wp-content/uploads/headlines/2023/03/twitter-most-06.jpg',
                },
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'I would like to visit Italy'},
                {id: 3, message: 'I am going to NYC'},
                {id: 4, message: 'Learn React right now!!!'},
            ],
            newMessageText: '',
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
            ]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);


        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})

window.store = store;

export default store;