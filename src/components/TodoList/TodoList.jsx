import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.length > 0 &&
      todos.map(task => <TodoInfo key={task.id} todo={task} />)}
  </section>
);
