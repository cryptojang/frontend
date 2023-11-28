import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";

import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer); //useselector는 리덕스의 값 가져올 수 잇는 함수
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return; //todos, dispatch 의존성에 따라 무한대로 실행되는 것 막기 위해 todos 없을 때(처음)만 실행되도록

    dispatch(getTodos());
  }, [todos, dispatch]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className=" min-h-screen max-w-screen-md mx-auto mt-20 flex flex-col items-center">
      <div className="px-4 py-2 text-6xl font-bold text-blue-600 mb-8 border-2 rounded-xl border-blue-100">
        To Do List
      </div>
      <CreateTodo />
      <ul className=" mt-12 flex flex-col ">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            index={i}
            id={v.id}
            title={v.title}
            isDone={v.isDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
