import React from 'react';
import Friend from "./Friend/Friend";
import search from '../../img/search.svg'
import s from './Friends.module.css';

const Friends = (props) => {


    let friendElements = props.state.friends.map(f => <Friend key={f.id} id={f.id} name={f.name} imgAva={f.imgAva}/>)


    return (
        <div>
            <h3>Find friends</h3>
            <div className={s.searchItems}>
                <textarea className={s.searchTextarea} placeholder='Search'></textarea>
                <button><img src={search} alt="Search image" className={s.searchButtonImg}/></button>
            </div>

            {friendElements}
        </div>

    );
};

export default Friends;