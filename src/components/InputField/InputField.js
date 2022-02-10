import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/todoSlice/todoSlice';

const InputField = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const addNewTodo = () => {
        if (text.trim().length) {
            dispatch(addTodo({text}))
            setText('')
        }
    }

    return (
        <>
            <label>
                <input
                    className="todo__input"
                    type="text"
                    placeholder="enter text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn btn-input" onClick={addNewTodo}>Add todo</button>
            </label>
        </>
    );
};

export default InputField;