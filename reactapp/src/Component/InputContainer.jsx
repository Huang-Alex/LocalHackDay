import React, {Component} from 'react';

import '../Stylesheets/InputContainer.scss';

class InputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="Input-container" style={
        {
          "float": "left",
          "flex-grow": "1",
          "flex-basis": "0",
          "padding-top": "20px"
        }}>
        <h3>Input</h3>
        <textarea
          style={{"width": "90%", "height": "200px"}}
          value={this.props.inputText}
          onChange={evt => this.props.updateTextCallback(evt)}
          placeholder={"Enter your text to inclusify!"}
        />
      </span>
    );
  }
}

export {InputContainer};
