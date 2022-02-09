import React from 'react';

const InputField = ({text, addTodo, setText}) => {
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
                <button className="btn btn-input" onClick={addTodo}>Add todo</button>
            </label>
        </>
    );
};

export default InputField;