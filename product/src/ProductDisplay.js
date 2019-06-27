import React from 'react';

class ProductDisplay extends React.Component{
    render()
    {
        let str = this.props.name;
        if(this.props.value === "" || str.includes(this.props.value))
        {
            return(
                <tr>
                    <td>{this.props.name}</td>
                    <td>Rs.{this.props.price}</td>
                </tr>
            )   
        }
        else
        {
            return <div></div>
        }
    }
}

export default ProductDisplay;