// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// import profileReducer from "./profile-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 20},
//                 {id: 2, message: 'This my first post.', likesCount: 11},
//                 {id: 3, message: 'Fu fu', likesCount: 14},
//                 {id: 4, message: 'Bla bla', likesCount: 1}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'August'},
//                 {id: 2, name: 'Benedikt'},
//                 {id: 3, name: 'Diana'},
//                 {id: 4, name: 'Victor'},
//                 {id: 5, name: 'Leona'},
//                 {id: 6, name: 'George'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Yo'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('state');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
//
// window.store = store;
//
//
