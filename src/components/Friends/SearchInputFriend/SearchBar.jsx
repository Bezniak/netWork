// import React, {useState} from 'react';
// import s from './SearchBar.module.css';
// import {FaSearch} from 'react-icons/fa';
// import store from '../../../redux/redux-store';
//
//
// const SearchBar = (props) => {
//
//     const friendArray = store.getState().sidebar.friends;
//
//     const [input, setInput] = useState('')
//
//     const getFriend = (value) => {
//         let newFriendArray = friendArray.filter((friend) => {
//             return friend && friend.name && friend.name.toLowerCase().includes(value);
//         })
//         props.setFriendResult(newFriendArray)
//     }
//
//     const handleChange = (value) => {
//         setInput(value);
//         getFriend(value);
//     }
//
//
//     return (
//         <div className={s.inputWrapper}>
//             <input className={s.input} placeholder='Search' value={input} onChange={(e) => handleChange(e.target.value)}/>
//             <FaSearch id='search-icon'/>
//         </div>
//     );
// };
//
// export default SearchBar;