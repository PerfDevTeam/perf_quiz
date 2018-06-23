import React from 'react';
import Button from '@material-ui/core/Button';

export default class Answer extends React.Component {

  handleClick() {
    this.props.nextPage(this.props.pageNum);
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
          photo + option
        </Button>
      </div>
    );
  }
}
