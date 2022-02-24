import React, { Component } from "react";

export default class EnterButton extends Component {
  render() {
    return (
      <div>
        <button
          className="enterButton"
          onClick={() => {
            //only work if this is the active word
            if (this.props.wordId == this.props.currentWordIndex && this.props.lettersArray.length==5) {
              this.props.guess(this.props.wordId);
              this.props.nextWord();
            }
          }}
        >
          wordId: {this.props.wordId} Guess {this.props.lettersArray.toString()}
        </button>
      </div>
    );
  }
}
