import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './TweetBox'
import Tweet from './Tweet'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "Hello",
          liked: true
        },
        {
          text: "World",
          liked: false
        },
        {
          text: "HOang",
          liked: false
        },
        {
          text: "Ronaldo",
          liked: false
        },
        {
          text: "Someone",
          liked: false
        }
      ]
    };
  }
  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });

    this.setState({
      tweets
    })
  }
  handleDelete (tweetSelected) {
    // solution 1: have the problem that tweets array will remove all the same tweet which have same content 
    // let tweets = this.state.tweets.filter(el => el.text !== tweetSelected.text)
    // this.setState({
    //   tweets
    // })

    // solution 2
    const indexTweetSelected = this.state.tweets.indexOf(tweetSelected)
    const tweetArray = this.state.tweets
    if (indexTweetSelected !== -1) {
      tweetArray.splice(indexTweetSelected, 1)
      this.setState({tweets: tweetArray})
    }
  }
  handleTweet (tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false
    }
    this.setState(prevState => ({tweets: [...prevState.tweets, tweetObj]}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hoang</h1>
        </header>
        <div>
          <TweetBox 
            prompt="What's your status?"
            onTweet={this.handleTweet.bind(this)}
          />
          {/* <TweetList /> */}
          <div>
              {this.state.tweets.map(tweet => 
                <Tweet 
                  tweet={tweet}
                  handleLike={this.handleLike.bind(this)}
                  handleDelete={this.handleDelete.bind(this)}
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
