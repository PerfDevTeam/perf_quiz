import React from 'react';
import ReactDOM from 'react-dom';
import photo from '../assets/img_survey_host/root/intro_cropped.png';
import Header from './Header';
import Button from '@material-ui/core/Button';
import { animateScroll as scroll } from 'react-scroll'


export default class Intro extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  render() {
    return (
      <div className="App">
        <Header name={this.props.name}/>
        <div className="img_container">
          <img src={photo} className="perfumes" alt="perf_welcome!"/>
        </div>
        <div className="rightIntro">
          <div className="text_container">
            <h1>Create your own fragrance</h1><br></br>
            <h2>What is your name?</h2>
            <input placeholder="Enter your name" onChange={this.handleChange.bind(this)} />
            <Button variant="outlined" size="small" onClick={() => scroll.scrollToBottom()}>
              ok
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
