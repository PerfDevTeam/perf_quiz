import React from 'react';
import Question from './Question';
import Answer from './Answer';

export default class Qna extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNum: 0,
    };
  }

  nextPage(i) {
    this.setState({
      pageNum: i+1,
    });
  }

  render() {
    return (
      <div>
        <Question pageNum={this.state.pageNum}/>
        <Answer nextPage={this.nextPage.bind(this)} pageNum={this.state.pageNum}/>
      </div>
    );
  }
}
