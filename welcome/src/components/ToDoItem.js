import React from 'react';

function ToDoItem(props){
    const mystyle={
        textDecoration: "line-through",
        color : "#cdcdcd" ,
        fontStyle : "Italic"
    }
        return (
            <div className="to-do-item">
                   <input type="checkbox" checked={props.item.Completed} onChange={()=>props.handleEvent(props.item.id)}/>
                   <p style = { props.item.Completed ? mystyle : null}>{props.item.text}</p>
            </div>
        );
}

export default ToDoItem;