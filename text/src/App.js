import React from 'react';
import './App.css';

class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      firstName : "",
      lastName : ""
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render()
  {
    return (
      <div>
        <form>
          <input type="text" placeholder="FirstName" value={this.state.firstName} name="firstName" onChange={this.handleEvent}/>
          <br/>
          <input type="text" placeholder="LastName" value={this.state.lastName} name="lastName" onChange={this.handleEvent}/>
          <h3>{this.state.firstName} {this.state.lastName}</h3>
        </form>
      </div>
    );
  }
  
}

export default App;
