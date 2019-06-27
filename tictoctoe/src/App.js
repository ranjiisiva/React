import React from 'react';
import './App.css';
import Player from './Player';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      board : Array(9).fill(null),
      player : null,
      winner : null
    }
    this.handleClick=this.handleClick.bind(this);
    this.checkIt = this.checkIt.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
  }

  checkIt(){
    const winner = [
      ['0','1','2'],
      ['3','4','5'],
      ['6','7','8'],
      ['0','4','8'],
      ['2','4','6'],
      ['0','3','6'],
      ['1','4','7'],
      ['2','5','8']
    ]
    for(var index=0; index< 16 ; index++)
    {
      if(this.state.board[index]=== null)
        break;
    }
    if(index === 16)
    {
      alert("Match Draw");
      return;
    }
    for(let index=0 ; index<winner.length ; index++)
    {
      let [a,b,c] = winner[index];
      if(this.state.board[a] && this.state.board[b] && this.state.board[c] && this.state.board[a]===this.state.board[b] && this.state.board[a]===this.state.board[c])
      {
        alert("You Won!!!!");
        this.setState({
          winner : this.state.player
        })
      }
    }
  }

  setPlayer(_player)
  {
    this.setState({
      player : _player
    })
    setTimeout(() => {
      console.log(this.state.player);
    }, 2000);
  }

  handleClick(index) {
    if(!this.state.winner)
    {
    if(this.state.player)
    {
      let newBoard = this.state.board;
      let newPlayer = this.state.player;
      if(this.state.board[index] === null)
      {
        newBoard[index] = this.state.player;
        newPlayer = this.state.player === 'X' ? 'O' : 'X';
      }
      this.setState({
        board : newBoard,
        player : newPlayer
      })
      this.checkIt();
    }
    else
      alert("Select the Player")
  }
  else
    alert("Please Refresh the page")
  }

  renderBox()
  {
    return (
      this.state.board.map((box,index) => 
      <div 
        className="box" 
        key={index}
        onClick= {(e) => this.handleClick(index)}
        >{box}</div>)
    )
  }

  render(){
    let status = !this.state.player ? <Player player={(e)=>this.setPlayer(e)}/> : <h3>Next Player {this.state.player}</h3> ;
    if(this.state.winner)
    {
      let _player= this.state.player === 'X' ? 'O' : 'X';
      status = <h1>Player {_player} Won</h1>
    }
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
          {status}
        <br/>
        <div className="board">
          {this.renderBox()}
        </div>
      </div>
    );
  }
  
}

export default App;
