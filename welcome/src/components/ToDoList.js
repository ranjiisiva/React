import React,{Component} from 'react';
import ToDoItem from './ToDoItem'
import ToDosList from './ToDosList';

class ToDoList extends Component {
    constructor()
    {
        super();
        this.state={
            todos: ToDosList
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(id)
    {
        this.setState(prevState=>
            {
                const updatedTodos= prevState.todos.map(todo=>
                {
                    if(todo.id===id)
                        todo.Completed = !todo.Completed;
                    return todo
                })
                return {
                    todos:updatedTodos
                }
            })
    }

    render(){
        const list= this.state.todos.map(todo => <ToDoItem key={todo.id} item={todo} handleEvent={this.handleEvent}/>)
        return (
            <div className="to-do-list">
                {list}
            </div>
        );
    }
}

export default ToDoList;