import React from 'react';
import Intro from './Intro';
import Quiz from './Quiz';

export default class Pages extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "you",
    };
  }
  changeName(name) {
    this.setState({name});
  }

  render() {
    return (
      <div>
        <Intro changeName={this.changeName.bind(this)} name={this.state.name}/>
        <Quiz name={this.state.name}/>
      </div>
    );
  }
}
