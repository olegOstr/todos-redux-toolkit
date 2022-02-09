import React from 'react';

const TodoItem = ({id, text, completed, deleteTodo, toggleTodoCompleted}) => {
    return (
        <li key={id} className="todo__item">
            <input type="checkbox" checked={completed}
                   onChange={() => toggleTodoCompleted(id)}/>
            <span>{text}</span>
            <span onClick={() => deleteTodo(id)} className="delete">&times;</span>
        </li>
    );
};

export default TodoItem;