import {useState} from 'react';
import InputField from '../InputField/InputField';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
        }
        setText('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodoCompleted = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id !== id) return todo

                return {...todo, completed: !todo.completed}
            })
        )
    }

    return (
        <div className="App">
            <div className="container">
                <h1>Todos async app</h1>
                <InputField text={text} addTodo={addTodo} setText={setText}/>
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodoCompleted={toggleTodoCompleted}/>
            </div>
        </div>
    );
}

export default App;
