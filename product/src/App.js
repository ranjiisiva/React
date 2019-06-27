import React from 'react';
import './App.css';
import ProductList from './ProductData'
import ProductDisplay from './ProductDisplay';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      input : ""
    }
    this.search = this.search.bind(this)
  }

  search(event)
  {
    this.setState(
      {
        input : event.target.value.toLowerCase()
      }
    )
    console.log(this.state.input)
  }


  render()
  {
    const display= ProductList.map(product => <ProductDisplay name={product.name} price={product.price} value={this.state.input}/>)
    return (
      <div className="App">
        <div className="orange">
          <div className="blue">
            <form>
              <input 
              type="text" 
              placeholder="Search..." 
              value={this.state.input} 
              name="name" 
              onChange={this.search}
              className="search"/>
            </form>
          </div>
          <br/>
          <div className="green">
          <table className="tableStyle">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {display}
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
