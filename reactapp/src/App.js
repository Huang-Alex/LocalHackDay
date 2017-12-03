import React, { Component } from 'react';
import logo from './logo.svg';
import { InputContainer } from './Component/InputContainer.jsx';
import { OutputContainer } from './Component/OutputContainer.jsx';

import './App.css';
import './Stylesheets/OutputContainer.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateInputValue = this.updateInputValue.bind(this);
    this.clearText = this.clearText.bind(this);

    this.state = {
      inputText: ''
    }
  }

  clearText(){
    this.setState({
      inputText: ''
    })
  }

  updateInputValue(evt) {
    this.setState({
      inputText: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Inclusiv.tech</h1>
        </header>
        <div style={{"display":"flex"}}>
          <InputContainer
            updateTextCallback={this.updateInputValue}
            clearTextCallback={this.clearText}
            inputText={this.state.inputText}
          />
          <OutputContainer
            outputText={this.state.inputText}
          />
        </div>
      </div>
    );
  }
}

export default App;
