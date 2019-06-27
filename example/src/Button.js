import React from 'react';

class Button extends React.Component
{
    constructor()
    {
        super();
        this.state={
            text:true
        }
    }
    render(){
        return(
            <div>
                {{this.state.text===true} ? <button>Login</button> : <button>Logout</button>}
            </div>
        )
    }
}