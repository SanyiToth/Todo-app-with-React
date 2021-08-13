import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, setTodos}) => {
    console.log('todos', todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo =>
                    <Todo
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                        key={todo.id}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList;
