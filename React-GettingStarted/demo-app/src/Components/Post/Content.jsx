import React from 'react';

class PostContent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="content">
                <p>{this.props.Content}</p>
            </div>
        );
    }
}

export default PostContent;