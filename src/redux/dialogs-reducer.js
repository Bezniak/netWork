const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;