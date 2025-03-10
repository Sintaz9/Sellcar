import { createSlice } from '@reduxjs/toolkit';

// срез
const todoSlice = createSlice({
    // имя среза
    name: 'todos',
    // изначальное состояние
    initialState: {
        todos: [],
    },
    // набор редьюсеров, которые создают события и их обработку
    reducers: {
        addTodo(state, action) {
            state.todos.push({
              id: new Date().toISOString(),
              // через action.payload идет загрузка наших action из диспетчера в события
              // в качестве значения text будет использоваться наш введеный текст с помощью payload
              text: action.payload.text,
              completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

// экспортируем все наши события
export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

// экспортируем сам редьюсер - общая логика, которая нам нужна в сторе  
export default todoSlice.reducer;