// eslint-disable-next-line
import React from 'react';
import commonStyles from './styles'

const myRender = (props) =>
{
    let _mystyle = {...commonStyles.default};
    if(props.disable)
    {
        _mystyle = {...commonStyles.default,...commonStyles.disable}
    }
    let newprops = {...props,style : _mystyle};
    return newprops
}

export default (ButtonWrapper) =>
{
    return function wrappedRender(args){
        return ButtonWrapper(myRender(args))
    }
}