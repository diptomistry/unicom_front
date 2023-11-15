import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backResponse: "",
    };
  }

  callBack() {
    fetch('http://localhost:9000/test')
      .then(res => res.text())
      .then(res => this.setState({ backResponse: res }));
  }

  componentDidMount() {
    this.callBack();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.backResponse}</p>
      </div>
    );
  }
}

export default App;