import { FiEdit3, FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDone, updateTodo } from "../redux/appThunk";
import { useState } from "react";

const TodoCard = ({ index, id, title, isDone }) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(updateTodo({ todoId: id, title: newTodo }));

    setNewTodo("");
    setUpdateToggle(false);
  };

  return (
    <li
      className={`w-96 py-2  text-xl flex ${
        index % 2 ? "bg-white" : "bg-pink-50"
      } rounded-xl pl-5`}
    >
      <span className=" w-1/12 inline-block text-pin-600">{id}</span>
      {updateToggle ? (
        <form className="w-7/12 flex" onSubmit={onSubmitUpdateTodo}>
          <input
            className="w-9/12"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="w-3/12 ml-2" type="submit">
            {" "}
            <FiEdit3 />
          </button>
        </form>
      ) : (
        <button
          className={`w-7/12 inline-block ${
            isDone && "line-through"
          } hover:text-pink-600`}
          onClick={onClickIsDone}
        >
          {title}
        </button>
      )}
      <button
        className=" w-2/12  hover:text-pink-600  "
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? (
          "취소"
        ) : (
          <div className="px-5">
            <FiEdit3 />
          </div>
        )}
      </button>
      <button className=" w-2/12 px-5 hover:text-blue-600 ">
        <FiDelete />
      </button>
    </li>
  );
};

export default TodoCard;
