import React from 'react';

class PostHeader extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="user">
                <div className="header-wrapper">
                    <div className="left-head" data-attr={this.props.CreatedOn}>
                        <div className="profile-picture" style={{backgroundImage: 'url(' + this.props.AuthorProfilePicture + ')'}}></div>
                        <div className="user-name"><a href="#"><strong>{this.props.AuthorUsername}</strong></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostHeader;