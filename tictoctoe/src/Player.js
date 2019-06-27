import React from 'react';

class Player extends React.Component{
    handleForm(e)
    {
        e.preventDefault();
        this.props.player(e.target.value);
    }
    render()
    {
        return (
            <div>
                <form>
                    Player X
                    <input type="radio" name="player" value="X" onChange={(e)=>this.handleForm(e)}/>
                    <br></br>Player O
                    <input type="radio" name="player" value="O" onChange={(e)=>this.handleForm(e)}/>
                </form>
            </div>
        );
    }
}

export default Player;