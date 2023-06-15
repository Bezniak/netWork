import React, {useState} from 'react';
import Friend from "./Friend/Friend";
import searchImage from '../../img/searchImage.svg';
import s from './Friends.module.css';

const Friends = (props) => {

    const [friendResult, setFriendResult] = useState([])

    let friendElements = props.sidebar.friends.map(f => <Friend key={f.id} id={f.id} name={f.name} imgAva={f.imgAva}/>)

    return (

        <div>
            <h3>Find friends</h3>
            <div className={s.searchItems}>
                <input  type="search"
                        placeholder="Search"
                />
                <button className={s.btn}><img src={searchImage} alt="Search image" className={s.searchButtonImg}/></button>
            </div>

            {friendElements}

        </div>

    );
};

export default Friends;