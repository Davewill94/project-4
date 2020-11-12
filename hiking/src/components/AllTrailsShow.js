import React from 'react';
import { Link } from 'react-router-dom';



function AllTrailsShow(props) {
    return(
        <div>
            {props.allTrails.map((trail, idx) => (
                <div className="user-saved-trips">
                    <Link to={`/trails/${trail.id}`} key={idx}>
                        <h3>{trail.name}</h3>
                        <img src={trail.imgSmallMed} alt="No trail Image Avaliable" />
                        <p>{trail.summary}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}


export default AllTrailsShow;