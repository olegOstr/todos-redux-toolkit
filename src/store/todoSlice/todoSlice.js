import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.text,
                completed: false
            })
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id)

            toggledTodo.completed = !toggledTodo.completed
        },
    },
})

export const {addTodo, deleteTodo, toggleTodoCompleted} = todoSlice.actions

export default todoSlice.reducer