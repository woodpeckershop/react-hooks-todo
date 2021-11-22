import { useRef, FC, ReactElement } from "react";
import { ITodo } from "../Typings/Index";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();

    if (val.length) {
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        alert("Already Exist.");
      }

      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });

      inputRef.current!.value = '';
    }
  };

  return (
    <div className="todo-input">
      <input type="text" placeholder="Please type todo items." ref={inputRef} />
      <button onClick={}>Add</button>
    </div>
  );
};

export default TdInput;
