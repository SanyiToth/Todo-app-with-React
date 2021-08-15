import React, {useState} from "react";
import './App.css';
import Form from './components/Form'
import TodoList from "./components/TodoList";


function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    return (
        <div className="App">
            <header>
                <h1>Sandor's Todo-List</h1>
            </header>
            <Form todos={todos}
                  setTodos={setTodos}
                  inputText={inputText}
                  setInputText={setInputText}
                  setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                status={status}
            />
        </div>
    );
}

export default App;
