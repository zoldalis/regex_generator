import React from 'react';
import './App.css';

/* var InputText = React.createClass({
  getInitialState:function(){
     return {
        textVal:''
     }
 },
  render: function () {
    return (
      <input type="text" value={this.state.textVal} autofocus="autofocus" onChange={this.handleChange} />
    )
  },
  handleChange: function (evt) {
    this.setState({ textVal: evt.target.value.substr(0, 100) });
  }
}); */

function generate_output(input_text)
{

}

const generate_clicked = event => {
  // 👇️ access textarea value
  const input = document.getElementById("input_text");
  let text = input.value;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REgular Expressions GENerator</h1>
      </header>
      <div className="content-center">
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>My regexes</li>
          <li>About</li>
        </ul>
      </div>
      <div className="main-content">
        <textarea 
        id="input_text"
        name="input_text"
        value={""}
        className="text-edit" rows="10"></textarea>
        <textarea 
        id="ouput_text"
        name="ouput_text"
        value={""}
        className="text-edit" rows="10"></textarea>
        <button 
        id="generate_button"
        onClick={generate_clicked}
        className="button">Generate</button>
      </div>
    </div>
    </div>
  );
}



export default App;
