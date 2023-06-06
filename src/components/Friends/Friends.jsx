import React from 'react';
import Friend from "./Friend/Friend";

const Friends = (props) => {


    let friendElements = props.state.friends.map(f => <Friend id={f.id} name={f.name} imgAva={f.imgAva}/>)

    return (
        <>
            {friendElements}
        </>

    );
};

export default Friends;