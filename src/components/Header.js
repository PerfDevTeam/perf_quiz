import React from 'react';
import logo from '../assets/img_survey_host/root/logo.png';

export default class Header extends React.Component {

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="perf-logo" alt="logo" />
        <h1 className="name_container">For {this.props.name || "you"}</h1>
      </header>
    );
  }
}
