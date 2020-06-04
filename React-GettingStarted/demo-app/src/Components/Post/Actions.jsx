import React from 'react';

class PostActions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="actions">
                <div className="action-buttons" id="like">
                    <button className="like-btn" onClick={this.props.onLike}><i className="far fa-thumbs-up"></i>Like</button>
                </div>
                <div className="action-buttons"><i className="far fa-comments"></i><button id="comment-button">Comment</button></div>
            </div>
        );
    }
}

export default PostActions;