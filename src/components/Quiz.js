import React from 'react';
import Header from './Header';
import Qna from './Qna';

export default class Quiz extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name={this.props.name}/>
        <Qna />
      </div>
    );
  }
}
