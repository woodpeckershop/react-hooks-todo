import TdList from "./List/Index";
import TdInput from "./Input/Index";

const TodoList = () => {
  return <div className = 'todo-list'>
    <TdInput />
    <TdList />
  </div>;
};

export default TodoList;
