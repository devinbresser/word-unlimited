import React, { Component } from "react";

export default class LetterBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.changeLetter = this.props.changeLetter;
  }
  handleChange(event) {
    this.props.updateWord(
      event.target.value.toUpperCase(),
      this.props.letterId
    );
  }
  render() {
    //processing to assign css classes to letter boxes
    //for active and inactive-future words, assign css class
    let className = `${this.props.wordStates[this.props.wordId]}-letter-box`;

    //for inactive-previous word, also assign correct-right-place and correct-wrong-place based on guess
    if (this.props.wordStates[this.props.wordId] == "inactive-previous") {
      className = `inactive-previous-letter-box ${this.props.assignLetterClass(this.props.letterId)}`;
    }
    return (
      <div>
        <input
          className={className}
          onChange={this.handleChange}
          maxLength="1"
        />
        <p>{className}, {this.props.letterId}</p>
      </div>
    );
  }
}
