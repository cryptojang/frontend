import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = async (e) => {
    e.preventDefault();

    if (!newTodo) return;

    await dispatch(createTodo({ title: newTodo })); //서버로 날리는 곳? redux 안 쓰면 여기에 axios 실행하는 곳. //실행 순서 보장받아야 할 때 await 붙임

    dispatch(setNewTodo(""));
  };

  return (
    <form className=" flex" onSubmit={onSubmitCreateTodo}>
      <input
        className="px-4 py-2 text-2xl focus:outline-none border-2 focus:border-pink-400 rounded-xl"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-4 px-4 py-3 bg-pink-400 hover:bg-pink-500 active:bg-pink-400 rounded-xl"
        type="submit"
        value="생성"
      />
    </form>
  );
};

export default CreateTodo;
