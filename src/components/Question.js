import React from 'react';

export default class Question extends React.Component {
  render() {
    const questions = ['How would you want to spend your vacation?',
            'Who are you at a party?',
            'How do you want others to remember you?',
            'If a time machine was just released, where would you go?',
            'What is your ideal night out?',
            'What is your style?'];

    return (
        <p className="question">
          {questions[this.props.pageNum]}
        </p>
    );
  }
}
