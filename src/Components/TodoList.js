import React from 'react'
import Todo from "./Todo.js"
import{useSelector} from 'react-redux';

function TodoList() {
    const todos = useSelector( (state) => state.todoReducers.todos );

    const todosArr = todos.map(todo => {
        return (
            <Todo 
                item = {todo} 
                key = {todo.id} 
            />
        );
    });

    return (
        <div className= "todo--list">
           {todosArr}
        </div>
    )
}

export default TodoList
