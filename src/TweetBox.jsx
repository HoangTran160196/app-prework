import React, { Component } from 'react';


class TweetBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      charsRemaining: 140
    };
  }
  onTweett () {
    this.props.onTweet(this.state.text)
  }
  handleChange (text) {
    this.setState({
      text,
      charsRemaining: 140 - text.length
    })
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder={this.props.prompt}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <p>{this.state.charsRemaining}</p>
        <button 
          onClick={this.onTweett.bind(this)}
          disabled={this.state.charsRemaining < 0}
        > 
        Tweet 
      </button>
      </div>
    );
  }
}

export default TweetBox;
