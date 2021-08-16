import React, {useState, useEffect} from "react";
import './App.css';
import Form from './components/Form'
import TodoList from "./components/TodoList";


function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])


    const filterHandler = () => {
        switch (status) {
            case ('completed'):
                setFilteredTodos(todos.filter(item => item.completed === true));
                break;
            case ('uncompleted'):
                setFilteredTodos(todos.filter(item => item.completed === false));
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        JSON.parse(localStorage.getItem('todos')) === null ?
            setTodos([]) : setTodos(JSON.parse(localStorage.getItem('todos')))
    }
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
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos}
                status={status}
            />
        </div>
    );
}

export default App;
