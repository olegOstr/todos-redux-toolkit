import InputField from '../InputField/InputField';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App = () => {

    return (
        <div className="App">
            <div className="container">
                <h1>Todos async app</h1>
                <InputField/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
