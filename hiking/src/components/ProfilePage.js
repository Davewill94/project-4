import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.currentUser.id}</h2>
            <h2>{props.currentUser.name}</h2>
            <h2>{props.currentUser.email}</h2>
            <h2>{props.currentUser.bio}</h2>
            <img src={props.currentUser.img} alt="Profile Image"/>

            <Link to={`/profile/${props.currentUser.id}/edit`}>Edit Profile</Link>
        </div>
    )
}


export default ProfilePage;