import React,{Component} from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor()
    {
        super();
        this.state={
        count:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    increment()
    {
        this.setState((prevState)=>{
        return {count : prevState.count + 1}
        })
    }

    decrement()
    {
        this.setState((prevState)=>{
        return {count : prevState.count - 1}
        })
    }
  render()
  {
    return(
        <div>
          <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
        </div>
    )
  }
}

export default App;
