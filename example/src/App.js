import React from 'react';
import './App.css';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      isLoggedIn: false
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(){
    this.setState(prevState => {
      return (
      this.isLoggedIn= !prevState.isLoggedIn
      )
    })
  }

  render(){
    let text= this.state.isLoggedIn ? "Logout" : "Login";
    let display = this.state.isLoggedIn ? "Logged IN": "Logged Out";
    return(
      <div>
        <button onClick={this.handleEvent}>{text}</button>
        <h1>{display}</h1>
      </div>
    )
  }
}

export default App;
