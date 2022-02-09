import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({todos, deleteTodo, toggleTodoCompleted}) => {
    return (
        <ul className="todo__list">
            {todos.map(todo =>
                <TodoItem key={todo.id}
                          {...todo}
                          deleteTodo={deleteTodo}
                          toggleTodoCompleted={toggleTodoCompleted}
                />
            )}
        </ul>
    );
};

export default TodoList;