import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }
  mouseClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render() {
    return (
      <button onClick={this.mouseClick} label={`${this.state.timesClicked}`}>{this.state.timesClicked}</button>
    );
  }
}
