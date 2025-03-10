import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
  // reducer - объект который принимает ключи, которые берут срезы (slice)
  // в сторе идет подключение редьюсера
  reducer: {
    todos: todoReducer,
  },
});
