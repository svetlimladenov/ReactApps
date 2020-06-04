import React from 'react';

function LikesCount(props){
    return (
        <div className="likes-count">
        <button className="show-likes"><i className="fas fa-thumbs-up"></i> <span className="post-likes-number">{props.Count}</span> likes</button>
    </div>
    )
}

export default LikesCount;