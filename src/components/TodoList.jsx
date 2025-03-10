import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  // useSelector - второй хук redux, нужен для того чтобы взять информацию из глобального хранилища - store
  // передается ф-ия, которая показывает, что из всего стейта, мы обращаемся к ветке в сторе (todos) и достаем конкретные значения 
  // из среза (todos - в блоке initialState) и используй их
    const todos = useSelector(state => state.todos.todos);

  return (
    <ul className="comments-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          // спред нужен для пробрасывания всех пропсов объекта
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
