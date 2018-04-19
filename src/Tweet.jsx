import React, { Component } from 'react';
class Tweet extends Component {
  render() {
    let tweet = this.props.tweet;
    return (
        <div>
            {tweet.text}
            <br/>
            <button onClick={() => this.props.handleLike(tweet)}>
                {tweet.liked ? 'Unlike' : 'Like'} Post
            </button>
            <button onClick={() => this.props.handleDelete(tweet)}>
              Delete
            </button>
        </div>
    )
  }
}
export default Tweet;