import React from 'react';

function Joke(props)
{
    return(
        <div>
            <h1 style={{display: props.question ? "block" : "none"}}>Question : {props.question}</h1>
            <h4>PuchLine : {props.punchLine}</h4>
        </div>
    );
}

export default Joke;