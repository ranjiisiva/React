
import React from 'react';
import ButtonWrapper from './ButtonWrapper'

class ButtonClass extends React.Component
{
    render(props)
    {
        return ( 
            <div>
                <button style={props.style}>Click ME</button>
            </div>
        )
    }
}

export default ButtonWrapper(ButtonClass);