import React, {Component} from 'react';

class OutputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outputState: 'Loading ...'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.doAjaxThing(nextProps.outputText, this);
  }

  doAjaxThing(text, scope) {
    var data = JSON.stringify({
      "text": text
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        scope.setState({
          outputState: JSON.parse(this.responseText)[0].replacement_string
        });

        return;
      }
    });

    xhr.open("POST", "http://cors-anywhere.herokuapp.com/6048d1c6.ngrok.io/alex-text-replace");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "d8b72bb2-d5b1-fcce-79fc-f4f787707ed0");

    xhr.send(data);
  }

  render() {
    console.log("abc");
    return (
      <span className="Output-container" style={
        {
          "float": "left",
          "flex-grow": "1",
          "flex-basis": "0",
          "padding-top": "20px"
        }}>
          <h3>Output</h3>
        <textarea
          style={{"width": "90%", "height": "200px"}}
          value={this.state.outputState}
          readOnly
        />
        </span>
    );
  }
}

export {OutputContainer};
