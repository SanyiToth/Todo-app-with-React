import React from "react";
import Todo from "./Todo";


const TodoList = ({todos}) => {
    console.log('todos', todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo =>
                    <Todo text={todo.text} key={todo.id} complete={todo.complete}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList;
