import { FiEdit3, FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleDone } from "../redux/appThunk";

const TodoCard = ({ index, id, title, isDone }) => {
  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  return (
    <li
      className={`w-96 py-2  text-xl flex ${
        index % 2 ? "bg-white" : "bg-pink-50"
      } rounded-xl pl-5`}
    >
      <span className=" w-1/12 inline-block text-pin-600">{id}</span>
      <button
        className={`w-7/12 inline-block ${
          isDone && "line-through"
        } hover:text-pink-600`}
        onClick={onClickIsDone}
      >
        {title}
      </button>
      <button className=" w-2/12 px-5 hover:text-pink-600  ">
        <FiEdit3 />
      </button>
      <button className=" w-2/12 px-5 hover:text-blue-600 ">
        <FiDelete />
      </button>
    </li>
  );
};

export default TodoCard;
