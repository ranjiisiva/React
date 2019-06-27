
import React from 'react';
import ButtonWrapper from './ButtonWrapper'

const Button = (props)=>
{
        return ( 
            <div>
                <button style={props.style}>Click ME</button>
            </div>
        )
}

export default ButtonWrapper(Button);