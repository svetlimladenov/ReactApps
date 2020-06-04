import React from 'react';
import PostHeader from './PostHeader';
import PostActions from './Actions';
import PostContent from './Content';
import LikesCount from './LikesCount';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            likesCount : 5
        }
        this.onLike = this.onLike.bind(this);
    }

    onLike(){
        this.setState(state => ({
            likesCount : state.likesCount + 1
        }))
    };

    render(){
        return(
            <div className="single-post">
                <h1>Post</h1>
                <PostHeader 
                    CreatedOn="01/01/2020" 
                    AuthorProfilePicture="https://picsum.photos/200"
                    AuthorUsername = "Svetlin"
                    />
                <PostContent Content="Supp brother"/>
                <LikesCount Count={this.state.likesCount}/>
                <PostActions onLike={this.onLike}/>
            </div>
        )
    }
}

export default Post;

