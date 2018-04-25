import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
constructor() {
  super();
  
  this.state = {
    numbers: [],
    counter: 0
  }
  this.handleInputChange = this.handleInputChange.bind(this);
}
  componentDidMount() {
    axios.get('/api/numbers')
      // .then( ( response ) => this.setState({numbers: response.data}))
      .then( ( { data } ) => this.setState({numbers: data}))
      .catch( (err) => console.log(err));
  }

  handleInputChange(e) {
    axios.post('/api/increment', {increment: e.target.value} )
    .then( response => {
      this.setState({
        counter: response.data
      });
    })
  }

  render() {
    console.log(this.state.numbers);
    const numbers = this.state.numbers.map( (number, index) => {
      return (
        <div key={'mynumbers'+index}>
          <h2>{number}</h2>
        </div>
      )
    } );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.counter}
        <input type='number' onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
