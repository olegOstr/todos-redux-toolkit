import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleTodoCompleted} from '../../store/todoSlice/todoSlice';

const TodoItem = ({id, title, completed}) => {

    const dispatch = useDispatch()

    return (
        <li key={id} className="todo__item">
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoCompleted({id}))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(deleteTodo({id}))} className="delete">&times;</span>
        </li>
    );
};

export default TodoItem;