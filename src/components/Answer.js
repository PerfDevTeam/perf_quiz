import React from 'react';
import AnsBut from './AnsBut';

export default class Answer extends React.Component {

  onClick(i) {
    this.props.nextPage(this.props.pageNum);
    console.log(i)
  }

  createBut = () => {
    let table = []

    for (let i = 0; i < 4; i++) {
      table.push(<AnsBut handleClick2={this.onClick.bind(this, i)} pageNum={this.props.pageNum} key={i} optNum={i}/>)
    }
    return table
  }

  render() {
    return(
      <div className="answers">
        {this.createBut()}
      </div>
    );
  }
}
